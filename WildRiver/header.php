<?php
	/*function authenticate(){
		if ($_SERVER['PHP_AUTH_USER'] !== 'admin' && $_SERVER['PHP_AUTH_PW'] !== 'admin') {

		header("WWW-Authenticate: Basic realm=\"thetutlage\"");
		header("HTTP\ 1.0 401 Unauthorized");
		echo 'There was an error';
		exit();
		}
	}

	authenticate();*/
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>WildRiver</title>
	<style>
		<?php
			include 'CSS\headerFooter.css';
		?>
	</style>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<script src="https://kit.fontawesome.com/f8876c7734.js" crossorigin="anonymous"></script>
</head>
<body>
	<div>
		<nav id="navbar">
			<input type="checkbox" id="check">
			<label for="check" class="checkbtn">
				<i class="fas fa-bars"></i>
			</label>
			<label class="logo">WildRiver</label>
			<ul>
				<li><a class="active1" href="index.php">Etusivu</a></li>
				<li><a class="active2" href="mitateemme.php">Mitä teemme</a></li>
				<li>
					<div class="dropdown">
						<button id="mybtn" onclick="dropFunction()" class="dropbtn">
							<a href="faktoja.php">Faktoja</a>+
						</button>
    					<div id="myDropdown" class="dropdown-content">
      						<a class="activeH" href="historia.php">Virtavesikunnostuksen historia</a>
      						<a class="activeV" href="virtavesiekosysteemi.php">Virtavesiekosysteemi</a>
      						<a class="activeO" href="opas.php">Toimenpiteet virtavesien kunnostuksessa</a>
    					</div>
					</div>
				</li>
				<li><a class="active3" href="paivanpolttavaa.php">Päivänpolttavaa</a></li>
				<li><a class="active4" href="kysymeilta.php">Kysy meiltä</a></li>
			</ul>
		</nav>
	</div>
	<div class="container">
		<header>
			<div class="tummennus"></div>
		</header>