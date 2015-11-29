<?php
$msg="";
if (isset($_GET["msg"])) {
	$msg = $_GET["msg"];
} else {
	$msg = "Testing";
}

$yourApiSecret = "b6e5105dca7160898741772a5dc6cca585e262a6440a05dc";
$androidAppId = "9feb0133";
$data = array(
  "user_ids" => array("10153157518167201"),
  "notification" => array("alert" => $msg)
);
$data_string = json_encode($data);

$ch = curl_init('https://push.ionic.io/api/v1/push');

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json',
    'X-Ionic-Application-Id: '.$androidAppId,
    'Content-Length: ' . strlen($data_string),
    'Authorization: Basic '.base64_encode($yourApiSecret)
    )
);

$result = curl_exec($ch);
var_dump($result);
var_dump($msg);

?>