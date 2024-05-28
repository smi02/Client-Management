<?php
include("connect.php");
if (isset($_POST["create"])) {
    $name = mysqli_real_escape_string($conn, $_POST["name"]);
    $age = mysqli_real_escape_string($conn, $_POST["age"]);
    $phone = mysqli_real_escape_string($conn, $_POST["phone"]);
    $company = mysqli_real_escape_string($conn, $_POST["company"]);
    $web = mysqli_real_escape_string($conn, $_POST["web"]);
    $sql = "INSERT INTO clients (name, age, phone, company, web) VALUE ('$name','$age','$phone','$company','$web')";
    
    if (mysqli_query($conn, $sql)) {
        session_start();
        $_SESSION["create"] = "Client Added Successfully";
        header("location:index.php");
    } else {
        exit("Something went wrong");
    }
}

if (isset($_POST["update"])) {
    $id = mysqli_real_escape_string($conn, $_POST["id"]);
    $name = mysqli_real_escape_string($conn, $_POST["name"]);
    $age = mysqli_real_escape_string($conn, $_POST["age"]);
    $phone = mysqli_real_escape_string($conn, $_POST["phone"]);
    $company = mysqli_real_escape_string($conn, $_POST["company"]);
    $web = mysqli_real_escape_string($conn, $_POST["web"]);
    $sql = "UPDATE clients SET name='$name', age='$age', phone='$phone', company='$company', web='$web' WHERE id='$id'";
    
    if (mysqli_query($conn, $sql)) {
        session_start();
        $_SESSION["update"] = "Client Updated Successfully";
        header("location:index.php");
    } else {
        exit("Something went wrong");
    }
}
?>