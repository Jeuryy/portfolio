<?php
	$to = "elyruej.102004@gmail.com";
	$name = $_POST['name'];
	$from = $_POST['email'];
	$subject = $_POST['subject'];
	$message = $_POST['message'];
    $fullMessge = $message . "\n-" . $name;
	$header = "Sent from Portfolio!";
	$result = mail($to,$subject,$fullMessage,$header);


	
		echo '<script>alert("Your Message was sent Successfully!");</script>';
		echo '<script> setTimeout(\"location.href="index.html"\",1000)</script>';
?>