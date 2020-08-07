<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
//$email = $_POST['user_email'];
$phone = $_POST['user_phone'];
//$text = $_POST['user_msg'];
$top_form = $_POST['top_form'];




//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'mysteryquest72@mail.ru';                 // Наш логин
$mail->Password = 'adventura72';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('mysteryquest72@mail.ru', 'mysteryquest72');   // От кого письмо 
$mail->addAddress('alexandrvei@rambler.ru'); 
//$mail->addAddress('rowan_yana96@mail.ru');
//$mail->addAddress('kent19877@mail.ru');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('rowan_yana96@mail.ru');
//$mail->addCC('mysteryquest72@mail.ru');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Это собщение из '.$top_form. ' формы, с сайта Адвентура-хорор';
$mail->Body    = '' . $name . ' - оставил заявку, <br>его телефон: ' . $phone . '';
$mail->AltBody = 'Это альтернативный текст';

if(!$mail->send()) {
 echo 'Error';//в случае ошибки
}
else {
	 header('location: thank-you.php'); 
	}
?>