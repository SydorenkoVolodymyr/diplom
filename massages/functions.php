<?php

include 'db.php';


$fullname = $_POST['fullname'];
$age = $_POST['age'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];


//ADD
if (isset($_POST['add'])) {
    // $sql = ("INSERT INTO `relation`(`Name`, `Age`, `Number`, `Email`, `Comment`) VALUES ('[value-2]','[value-3]','[value-4]','[value-5]','[value-6]')");
    // $query = $pdo->prepare($sql);
    // $query->execute();

    $sql = ("INSERT INTO `relation`( `Name`, `Age`, `Number`, `Email`, `Comment`) VALUES (?, ?, ?, ?, ?)");
    $query = $pdo->prepare($sql);
    $query->execute([$fullname, $age, $phone, $email, $message]);
    
    if ($query) {
        header("Location: " . $_SERVER['HTTP_REFERER']);
    }
}
?>