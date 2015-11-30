<?php
header('Access-Control-Allow-Origin: *');
include("config.php");

$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);

/* check connection */
if ($mysqli->connect_errno) {
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
}

function addFriend($conn, $src, $target, $srcName, $name) {
	$srcEsc = mysqli_real_escape_string($conn,$src);
	$srcNameEsc = mysqli_real_escape_string($conn,$srcName);
	$targetEsc = mysqli_real_escape_string($conn,$target);
	$nameEsc = mysqli_real_escape_string($conn,$name);
	
	$q = "INSERT INTO friends (srcId,targetId,targetName,srcName) SELECT * FROM (SELECT '".$srcEsc."','".$targetEsc."','".$nameEsc."','" . $srcNameEsc . "') AS tmp WHERE NOT EXISTS (SELECT * FROM friends WHERE srcId='" . $srcEsc . "' AND targetId='" . $targetEsc . "') LIMIT 1";
	mysqli_query($conn, $q);

	$q2 = "INSERT INTO friends (srcId,targetId,targetName,srcName) SELECT * FROM (SELECT '".$targetEsc."','".$srcEsc."','".$srcNameEsc."','" . $nameEsc . "') AS tmp WHERE NOT EXISTS (SELECT * FROM friends WHERE srcId='" . $targetEsc . "' AND targetId='" . $srcEsc . "') LIMIT 1";
	mysqli_query($conn, $q2);
}

function addToUsers($conn, $src, $srcName, $friends) {
	$srcEsc = mysqli_real_escape_string($conn, $src);
	$srcNameEsc = mysqli_real_escape_string($conn, $srcName);

	$result = mysqli_query($conn, "SELECT * FROM users WHERE id='$srcEsc' LIMIT 1");

	if (mysqli_num_rows($result) == 0) {
    	// add to users table
    	mysqli_query($conn, "INSERT INTO users (id,name) VALUES ('$srcEsc','$srcNameEsc')");
    	// notify all in friendlist
    	pushNotify($friends);
    }

}

function fetchSync($conn, $src) {
	$srcEsc = mysqli_real_escape_string($conn,$src);
	$q = "SELECT targetId as id,targetName as name FROM friends WHERE doSync=1 AND srcId='" . $srcEsc . "'";
	$result = mysqli_query($conn, $q);
	$rows = array();
	while($r = mysqli_fetch_assoc($result)) {
	    $rows[] = $r;
	}
	echo json_encode($rows);
}

function pushNotify($friends) {
	$friendIds = array();
	foreach($friends as $value) {
		$friendIds[] = $value['id'];
	}

	$data = array(
		"user_ids" => $friendIds,
		"notification" => array("alert" => $msg)
	);
	$data_string = json_encode($data);

	$ch = curl_init('https://push.ionic.io/api/v1/push');

	curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
	curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_HTTPHEADER, array(
	    'Content-Type: application/json',
	    'X-Ionic-Application-Id: '.APP_ID,
	    'Content-Length: ' . strlen($data_string),
	    'Authorization: Basic '.base64_encode(API_SECRET)
	    )
	);

	$result = curl_exec($ch);
}

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

if (isset($request)) {
	$srcId = $request->srcId;
	$srcName = $request->srcName;
	$friends = $request->friends;
	$friendsArray = json_decode(json_encode($friends), true);

	foreach ($friendsArray as $val) {
	    $targetId = $val['id'];
	    $targetName = $val['name'];

	    addFriend($mysqli, $srcId, $targetId, $srcName, $targetName);
	}
	addToUsers($mysqli, $srcId, $srcName, $friendsArray);
	fetchSync($mysqli, $srcId);

} else {
	echo "No POST data was sent";
}

?>