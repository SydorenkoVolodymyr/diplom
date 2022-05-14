<?php

include 'db.php';

$get_id = $_GET['id'];


//READ
$sql = $pdo->prepare("SELECT `id`, `Name`, `Age`, `Number`, `Email`, `Comment` FROM `relation`");
$sql->execute();
$result = $sql->fetchAll(PDO::FETCH_OBJ);

//DELETE
if (isset($_POST['delete'])) {
    $sql = ("DELETE FROM relation WHERE id=?");
    $query = $pdo->prepare($sql);
    $query->execute([$get_id]);
    if ($query) {
        header("Location: " . $_SERVER['HTTP_REFERER']);
    }
}
