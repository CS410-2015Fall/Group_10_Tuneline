<?php
header('Access-Control-Allow-Origin: *');
include("config.php");

$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);

/* check connection */
if ($mysqli->connect_errno) {
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
}

function fetchMeta($conn, $id) {
	$idEsc = mysqli_real_escape_string($conn,$id);
	$q = "SELECT data FROM metadata WHERE id='$id'";

	$result = mysqli_query($conn, $q);
	$rows = array();
	while($r = mysqli_fetch_assoc($result)) {
	    $rows[] = $r;
	}
	// echo json_encode($rows);
	echo(json_encode(unserialize(base64_decode($rows[0]["data"]))));
	// echo json_encode(unserialize(base64_decode($newmeta)));
}

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

if (isset($request)) {
	$id = $request->id;

	fetchMeta($mysqli, $id);

} else {
	echo "No POST data was sent";
}

?>