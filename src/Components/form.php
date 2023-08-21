<?php
/**
 * @version 1.0
 */

require("class.phpmailer.php");
require("class.smtp.php");

// Valores enviados desde el formulario
if ( !isset($_POST["nombre"]) || !isset($_POST["apellido"]) || !isset($_POST["email"]) || !isset($_POST["consulta"]) || !isset($_POST["telefono"]) ) {
    die ("Es necesario completar todos los datos del formulario");
}

$recaptchaSecret = "6LeE88MnAAAAAKGkSYrs31x_Yvuigkost-2XxHVB"; // Reemplaza con tu clave secreta de reCAPTCHA v2
$recaptchaResponse = $_POST["g-recaptcha-response"];
$ip = $_SERVER["REMOTE_ADDR"];
$response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$recaptchaSecret}&response={$recaptchaResponse}&remoteip={$ip}");
$atributos = json_decode($response, true);

if (!$atributos['success']) {
    die("La verificación de reCAPTCHA falló. Por favor, intenta nuevamente.");
}

$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$email = $_POST["email"];
$telefono = $_POST["telefono"];
$consulta = $_POST["consulta"];
// Datos de la cuenta de correo utilizada para enviar vía SMTP
$smtpHost = "smtp.hostinger.com";  // Dominio alternativo brindado en el email de alta 
$smtpUsuario = "info@versadigital.com.ar";  // Mi cuenta de correo
$smtpClave = "Canape2023!!";  // Mi contraseña

// Email donde se enviaran los datos cargados en el formulario de contacto
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

$mail->From = $smtpUsuario; // Email desde donde envío el correo.
$mail->FromName = $nombre . " " . $apellido;
$mail->AddAddress($emailDestino); // Esta es la dirección a donde enviamos los datos del formulario
$mail->AddReplyTo($email); // Esto es para que al recibir el correo y poner Responder, lo haga a la cuenta del visitante. 
$mail->Subject = "Formulario de contacto Arquinox"; // Este es el titulo del email.
$mensajeHtml = nl2br($consulta);
$mail->Body = "Mensaje: {$mensajeHtml}<br /> Teléfono: $telefono<br /> Email: $email<br /><br />Formulario de contacto Versa Digital<br />"; // Texto del email en formato HTML
$mail->AltBody = "{$consulta} Teléfono: $telefono Email: $email\n\n Formulario de contacto Versa Digital"; // Texto sin formato HTML
// FIN - VALORES A MODIFICAR //

$mail->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);

$estadoEnvio = $mail->Send(); 
if($estadoEnvio){
  // Cambia la URL a la ruta de tu componente MensajeEnviado.jsx
  header("Location: /enviado"); 
  exit(); // Asegura que el script se detenga después de la redirección
} else {
  header("Location: /error"); // Cambia la URL en caso de error
  exit();
}
