<?php
header('Access-Control-Allow-Origin: *');

if ( !empty( $_FILES ) ) {
	$file = $_FILES['file'];
	$filename = $file['name'];
	$ext = pathinfo($filename, PATHINFO_EXTENSION);
	$filenameNoExt = preg_replace('/\.[^.]+$/','', $filename);
    $url = "http://159.203.246.24/sb/";
    $tempPath = $file['tmp_name'];
    $uploadPath = '/var/www/html/sb/'. $filename;

    move_uploaded_file( $tempPath, $uploadPath );
    $answer = array( 'answer' => 'File transfer completed', 'file' => $uploadPath, 'url' => $url.$filename, 'mp3' => $url.$filenameNoExt.".mp3");
    $json = json_encode( $answer );
    
    echo $json;
} else {
    echo 'No files';
}

if ($ext != "mp3") {
	$input = "/var/www/html/sb/".$filename;
	$output = "/var/www/html/sb/".$filenameNoExt.".mp3";
	$command = "ffmpeg -i " . $input . " -ab 64k " . $output . " && rm " . $input;
	exec($command);
}

?>