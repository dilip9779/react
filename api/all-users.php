<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

$allUsers = $conn->prepare("SELECT * FROM users");
$allUsers->execute( array());
if($allUsers->rowCount() > 0){
	while($r =  $allUsers->fetch()){
		$data[] = $r;
	}
    echo json_encode(["success"=>1,"users"=>$data]);
}
else{
    echo json_encode(["success"=>0]);
}