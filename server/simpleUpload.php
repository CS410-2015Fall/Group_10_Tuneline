<?php
header('Access-Control-Allow-Origin: *');

if ( !empty( $_FILES ) ) {
    $tempPath = $_FILES['file']['tmp_name'];
    $uploadPath = '/var/www/html/sb/'. $_FILES['file']['name'];
    move_uploaded_file( $tempPath, $uploadPath );
    $answer = array( 'answer' => 'File transfer completed', 'file' => $uploadPath );
    $json = json_encode( $answer );
    echo $json;
} else {
    echo 'No files';
}
?>