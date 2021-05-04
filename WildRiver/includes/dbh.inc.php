<?php

$serverName = "localhost";
$dBUserName = "root";
$dBPassword = "";
$dBName = "wildriver"; //This is the database name (localhost/phpmyadmin)


/*

When you have created database (phpproject01) next task is to create table by using SQL:

CREATE TABLE users (
    usersId int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
    usersName varchar(128) NOT NULL,
    usersEmail varchar(128) NOT NULL,
    usersUid varchar(128) NOT NULL,
    usersPwd varchar(128) NOT NULL
);

*/

$conn = mysqli_connect($serverName, $dBUserName, $dBPassword, $dBName);

if (!$conn) { //If failed (atention="!")
	die("Connection failed: " . mysql_connect_error());
}