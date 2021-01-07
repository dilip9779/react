<?php
$host = "localhost";
$port = "5432";
$username = "postgres";
$password = "nic";
$dbname = "react";
$dsn = "pgsql:host=$host;port=$port;dbname=$dbname;user=$username;password=$password";
try{
  $conn = new PDO($dsn);
 
 if(!$conn){
 echo "<strong>$db</strong> database Not Connected!";
 }
}catch (PDOException $e){
 echo $e->getMessage();
}