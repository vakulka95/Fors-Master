<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$mail = $_POST['mail'];

$to = "forssmaster@gmail.com";

$subject = "Заявка із сайту";
$message = "
Ви отримали лист від нового клієнта. Зв’яжіться з ним! <br>
Ім’я: ".htmlspecialchars($name)."<br>
Телефон: ".htmlspecialchars($phone)."<br>
Email: ".htmlspecialchars($mail);
$headers = "From: $mail\r\nContent-type: text/html; charset=utf-8\r\n";
mail($to, $subject, $message, $headers);
header('Location: thankyou-page.html');

exit;
?>