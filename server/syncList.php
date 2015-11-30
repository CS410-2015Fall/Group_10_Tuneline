<?php
header('Access-Control-Allow-Origin: *');
include("config.php");

$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);

/* check connection */
if ($mysqli->connect_errno) {
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
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

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

if (isset($request)) {
	$id = $request->id;

	fetchSync($mysqli, $id);

} else {
	echo "No POST data was sent";
}

?>