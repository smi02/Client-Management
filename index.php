<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include("connect.php");
$obj = new connect;
$conn = $obj->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "GET":
        $sql = "SELECT * FROM clients";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if(isset($path[2]) && is_numeric($path[2])) {
            $sql .= " WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[2]);
            $stmt->execute();
            $clients = $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $clients = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
        
        echo json_encode($clients);
        break;

    case "POST":
        $client = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO clients(id, name, age, phone, company, web) VALUE (null, :name, :age, :phone, :company, :web)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':name', $client->name);
        $stmt->bindParam(':age', $client->age);
        $stmt->bindParam(':phone', $client->phone);
        $stmt->bindParam(':company', $client->company);
        $stmt->bindParam(':web', $client->web);
        if ($stmt->execute()) {
            $response = ['status'=>1, 'message'=>'Record created successfully.'];
        } else {
            $response = ['status'=>0, 'message'=>'Failed to create record.'];
        }
        echo json_encode($response);
        break;
    
    case "PUT":
        $client = json_decode(file_get_contents('php://input'));
        $sql = "UPDATE clients SET name = :name, age = :age, phone = :phone, company = :company, web = :web WHERE id = :id";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $client->id);
        $stmt->bindParam(':name', $client->name);
        $stmt->bindParam(':age', $client->age);
        $stmt->bindParam(':phone', $client->phone);
        $stmt->bindParam(':company', $client->company);
        $stmt->bindParam(':web', $client->web);
        if ($stmt->execute()) {
            $response = ['status'=>1, 'message'=>'Record updated successfully.'];
        } else {
            $response = ['status'=>0, 'message'=>'Failed to update record.'];
        }
        echo json_encode($response);
        break;

    case "DELETE":
        $sql = "DELETE FROM clients WHERE id = :id";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $path[2]);
        if ($stmt->execute()) {
            $response = ['status'=>1, 'message'=>'Record deleted successfully.'];
        } else {
            $response = ['status'=>0, 'message'=>'Failed to delete record.'];
        }
        echo json_encode($response);
        break;
}
