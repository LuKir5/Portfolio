<?php
session_start();
if(isset($_POST['Senden'])) {
    $youremail = 'Lukas.Kirchberg@gmx.net';
    $fromsubject = 'lukas-kir.com';
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message']; 
	$to = $youremail; 
	$mailsubject = 'Nachricht bekommen von '.$fromsubject.' Kontaktseite';
	$body = $fromsubject.'
	
	Die dich kontaktierte Person heisst '.$name.'
	E-Mail: 
         '.$email.'
	
	Nachricht: 
	     '.$message.'
	
	|---------ENDE----------|'; 
    echo "Danke für Ihre Nachricht. Ich versuche sie möglichst bald zu bearbeiten. <br/>Zurück zur <a href='/index.html'>Homepage</a>"; 
	mail($to, $subject, $body);
} 
  else { 
    echo "Sie müssen zuerst eine Nachricht schreiben. </br> <a href='/index.html#contact'>Hier</a> geht es zum Kontaktformular."; 
 }
?>