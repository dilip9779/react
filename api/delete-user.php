<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));
if(isset($data->id) && is_numeric($data->id)){
   
		$query = "DELETE FROM users WHERE id=?";
		$insertUser = $conn->prepare($query);
		 try {
				$conn->beginTransaction();
				$insertUser->execute( array($data->id));
				$conn->commit();
				echo json_encode(["success"=>1,"msg"=>"User Deleted"]);
			} catch(PDOExecption $e) {
				$conn->rollback();
				echo json_encode(["success"=>0,"msg"=>"User Not Found!"]);
			}		
}
else{
    echo json_encode(["success"=>0,"msg"=>"User Not Found!"]);
}