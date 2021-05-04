<?php
if (isset($_GET['ID'])) {
	include_once 'includes/dbh.inc.php';
	$ID = mysqli_real_escape_string($conn, $_GET['ID']);

	$sql = "SELECT * FROM postaus WHERE id='$ID'";
	$result = mysqli_query($conn, $sql) or die("Bad querry: $sql");
	$row = mysqli_fetch_array($result);
} else {
		header('index.php');
}
?>

<?php
	include_once 'header.php';
	include_once 'includes/dbh.inc.php';
?>

<style>
	<?php include 'CSS\postausSivu.css'?>
</style>

<div class="main">
	<div class="postaus">
		<h1 style="margin-bottom: 20px;">Blogi</h1>
		<content>
			<img style="width: 50%;" src="includes/images/<?php echo $row['kuva'] ?>">
			<h2><?php echo $row['otsikko'] ?></h2>
			<p><?php echo $row['teksti'] ?></p>
		</content>
	</div>
</div>
<?php
	include_once 'footer.php';
?>