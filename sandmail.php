<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language');
$mail->isHTML(true);

$mail->setFrom('alekseimatyuhin@gmail.com','Матюхин Алексей');

$mail->addAddress('AlexMtkhn@yandex.ru');

$mail->Subject = 'Тестовый привет!';

$body = "<h1>Письмо отправлено!</h1>";


//if(!empty($_FILES[]))

if (!$mail->send()){
    $message = 'Ошибка';
} else{
    $message = 'Успех!';
}

$response = ['message' => $message];

header('Content-type: aplication/json');
echo json_encode($response);
