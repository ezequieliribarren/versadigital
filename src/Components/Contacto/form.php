<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

require("class.phpmailer.php");
require("class.smtp.php");

// Verifica que se hayan enviado todos los campos necesarios
if (!isset($_POST["nombre"]) || !isset($_POST["apellido"]) || !isset($_POST["email"]) || !isset($_POST["consulta"]) || !isset($_POST["telefono"])) {
    die ("Es necesario completar todos los datos del formulario");
}

$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$email = $_POST["email"];
$telefono = $_POST["telefono"];
$consulta = $_POST["consulta"];

// Datos de la cuenta de correo utilizada para enviar vía SMTP
$smtpHost = "smtp.hostinger.com";
$smtpUsuario = "info@versadigital.com.ar";
$smtpClave = "Canape2023!!";

// Email donde se enviarán los datos cargados en el formulario de contacto
$emailDestino = "info@versadigital.com.ar";

$mail = new PHPMailer();
$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->SMTPSecure = 'ssl';  // Habilitar SSL
$mail->Port = 465;
$mail->IsHTML(true);
$mail->CharSet = "utf-8";

$mail->Host = $smtpHost;
$mail->Username = $smtpUsuario;
$mail->Password = $smtpClave;

$mail->From = $smtpUsuario; // Email desde donde se envía el correo
$mail->FromName = $nombre . " " . $apellido;
$mail->AddAddress($emailDestino); // Dirección a donde se envían los datos del formulario
$mail->AddReplyTo($email); // Responderá a la dirección de correo del visitante
$mail->Subject = "Formulario de contacto VERSA DIGITAL"; // Título del email
$mensajeHtml = nl2br($consulta);
$mail->Body = "Mensaje: {$mensajeHtml}<br /> Teléfono: $telefono<br /> Email: $email<br /><br />Formulario de contacto Versa Digital<br />"; // Cuerpo del email en formato HTML
$mail->AltBody = "{$consulta} Teléfono: $telefono Email: $email\n\n Formulario de contacto Versa Digital"; // Texto sin formato HTML

$mail->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);

$estadoEnvio = $mail->Send();

if ($estadoEnvio) {
  // Cambia la URL a la ruta de tu componente MensajeEnviado.jsx
  header("Location: /enviado");
  exit(); // Asegura que el script se detenga después de la redirección
} else {
  header("Location: /error"); // Cambia la URL en caso de error
  exit();
}
?>
