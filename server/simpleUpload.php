<?php
header('Access-Control-Allow-Origin: *');

if ( !empty( $_FILES ) ) {
	$file = $_FILES['file'];
    $url = "http://159.203.246.24/sb/";
    $tempPath = $file['tmp_name'];
    $uploadPath = '/var/www/html/sb/'. $file['name'];
    move_uploaded_file( $tempPath, $uploadPath );
    $answer = array( 'answer' => 'File transfer completed', 'file' => $uploadPath, 'url' => $url.$file['name'] );
    $json = json_encode( $answer );
    echo $json;
} else {
    echo 'No files';
}
?>