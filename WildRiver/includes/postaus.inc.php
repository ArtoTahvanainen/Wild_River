<?php

	include_once 'dbh.inc.php'; //Linkki tiedostoon, jonka avulla päästään käsiksi tietokantoihin. Löytyy samasta kansiosta kuin tämä tiedosto.
	$msg ="";

	$kuva = $_FILES['kuva']['name'];
	$otsikko = $_POST['otsikko']; //Nämä muuttujat saadaan form elementin kautta
	$teksti = $_POST['teksti'];

	$target = "images/".basename($kuva);


	$sql = "INSERT INTO postaus (kuva, otsikko, teksti)
		VALUES ('$kuva', '$otsikko', '$teksti');"; //Lisätään tietoja tietokantaan form elemntin input kenttiin lisätyistä arvoista
	mysqli_query($conn, $sql);

	header('Location: ../paivanpolttavaa.php');

  	if (move_uploaded_file($_FILES['kuva']['tmp_name'], $target)) {
  		$msg ="Image upload success!";
  	} else {
  		$msg ="Image upload failed!";
  	}