<?php 

$host = 'eu-cdbr-west-02.cleardb.net';
$db = 'heroku_ae01b813f29799f';
$user = 'b35468fda4567b';
$pass = 'ac2a942e';

try {
    $pdo = new PDO("mysql:host=$host; dbname=$db", $user, $pass);
} catch (PDOException $e) {
    echo 'Помилка з`єднання з базою даних '.$e->getMessage();
}