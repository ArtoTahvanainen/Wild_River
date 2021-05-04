<?php
	include_once 'header.php';
	include_once 'includes/dbh.inc.php'
?>
<style>
	<?php include 'CSS\paivanpolttavaa.css'?>
</style>


		<div class="main">
			<div class="blogit" id="blogit">
				<div class="add2">
					<h1>BLOGIMME</h1>
					<form class="LisaaSisaltoB" action="includes/postaus.inc.php"  method="POST" enctype="multipart/form-data">
						<h2>Lisää blogiteksti:</h2><br>
						<label for="kuva">Kuvatiedosto:</label><br>
						<input type="file" name="kuva" placeholder="kuvatiedosto"/><br>
						<label for="otsikko">Otsikko:</label><br>
						<input type="text" name="otsikko" placeholder="otsikko"/><br>
						<label for="teksti">Kuvaus:</label><br>
						<textarea type="text" name="teksti"  placeholder="teksti"/></textarea><br>
						<button type="submit" name="submit">Lisää</button>	
					</form>
				</div>
				<div class="Blog" id="Blog">
					<?php
						$sql = "SELECT * FROM postaus ORDER BY id DESC";
						$result = mysqli_query($conn, $sql);

						if (mysqli_num_rows($result) > 0) {
							while ($row = mysqli_fetch_array($result)) {
								echo "
									<article class='mySlides fade'>
										<img src='includes/images/{$row['kuva']}' alt='{$row['kuva']}'>
										<h2>{$row['otsikko']}</h2>
										<p>{$row['teksti']}</p>
										<a href='postausSivu.php?ID={$row['id']}'>Lue lisää!</a>
										<hr>
									</article>";
							}
						}
					?>
					<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
					<a class="next" onclick="plusSlides(1)">&#10095;</a>
					<div id="dots" style="text-align:center">
  						<span class="dot" onclick="currentSlide(1)"></span> 
  						<span class="dot" onclick="currentSlide(2)"></span>
  						<span class="dot" onclick="currentSlide(3)"></span>
					</div>
				</div>
				<br>
			</div>
			<div class="uutiset" id="uutiset">
				<div class="add">
					<h1>LINKKEJÄ UUTISIIN</h1>
					<form class="LisaaSisaltoA" action="includes/uutinen.inc.php"  method="POST" enctype="multipart/form-data">
						<h2>Lisää blogiteksti:</h2><br>
						<label for="kuva">Kuvatiedosto:</label><br>
						<input type="file" name="kuva" placeholder="kuvatiedosto"/><br>
						<label for="otsikko">Otsikko:</label><br>
						<input type="text" name="otsikko" placeholder="otsikko"/><br>
						<label for="teksti">Kuvaus:</label><br>
						<textarea type="text" name="teksti"  placeholder="teksti"/></textarea><br>
						<label for="otsikko">Lähde:</label><br>
						<input type="text" name="lahde" placeholder="Lähde"/><br>
						<label for="linkki">Linkki:</label><br>
						<input type="text" name="linkki" placeholder="linkki"/><br>
						<button type="submit" name="submit">Lisää</button>	
					</form>
				</div>
				<div class="News" id="News">
					<?php
						$sql = "SELECT * FROM uutinen ORDER BY id DESC";
						$result = mysqli_query($conn, $sql);

						if (mysqli_num_rows($result) > 0) {
							while ($row = mysqli_fetch_array($result)) {
								echo "
									<article>
										<img src='includes/imagesUutinen/{$row['kuva']}' alt='{$row['kuva']}'>
										<h2>{$row['otsikko']}</h2>
										<p>{$row['teksti']}...</p>
										<p style='text-align: center;'>{$row['lahde']}</p>
										<a href='{$row['linkki']}'>Linkki uutiseen!</a>
										<hr>
									</article>";
							}
						}
					?>
				</div>
			</div>
		</div>
	</div>


<?php
	include_once 'footer.php';
?>