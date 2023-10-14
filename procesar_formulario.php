<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $destinatario = "obandolucas@hotmail.com";
    $asunto = $_POST["asunto"];
    $mensaje = $_POST["mensaje"];
    
    $cabeceras = "From: " . $_POST["email"];
    
    mail($destinatario, $asunto, $mensaje, $cabeceras);
    
    // Puedes redirigir al usuario a una página de "Gracias" o similar
    header("Location: gracias.html");
}
?>
