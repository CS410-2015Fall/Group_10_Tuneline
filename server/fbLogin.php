<?php
header('Access-Control-Allow-Origin: *');

// if ( !empty( $_POST ) ) {
// 	$fbId = $_POST['fbId'];
// 	echo 'fbId: '.$fbId;
// } else {
//     echo 'No Facebook id provided';
// }

$postdata = file_get_contents("php://input");
if (isset($postdata)) {
	$request = json_decode($postdata);
	$fbId = $request->fbId;

	// add to database with identifier
	echo "Facebook ID: ".$fbId;
} else 
{
	echo "No POST data";
}

?>