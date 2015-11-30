<?php
header('Access-Control-Allow-Origin: *');
include("config.php");

$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);

/* check connection */
if ($mysqli->connect_errno) {
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
}

function saveMetadata($conn, $id, $metadata) {
	$idEsc = mysqli_real_escape_string($conn,$id);
	$metadataEsc = mysqli_real_escape_string($conn,$metadata);

	$q = "INSERT INTO metadata (id,data)
VALUES('$idEsc','$metadataEsc') ON DUPLICATE KEY UPDATE data = VALUES(data)";
	mysqli_query($conn, $q);
}

$postdata = file_get_contents("php://input");
if (isset($postdata)) {
	$request = json_decode($postdata);
	$id = $request->id;
	$metadata = $request->metadata;

	// add to database for corresponding id
	saveMetadata($conn, $id, $metadata);
	var_dump($metadata);
} else 
{
	echo "No POST data";
}

?>