<?php
include_once 'db.php';
$db = new DB();

//RECIBE LOS DATOS DEL FORMULARIO
$nombre = $_POST['nombre'];
$telefono = $_POST['celular'];
$empresa = $_POST['company'];
$correo = $_POST['email'];
$estado = $_POST['estado'];
$municipio = $_POST['municipio'];
$postal = $_POST['postal'];
$mensaje = $_POST['mensaje'];

//INSERTAR DATOS EN BASE DE DATOS

$insertar = "INSERT INTO cliente (nombre_cliente, nombre_empresa, correo_cliente, telefono_cliente, estado, municipio, cod_postal, descripcion) VALUES
('$nombre', '$empresa', '$correo', '$telefono', '$estado', '$municipio', '$postal', '$mensaje')";

$query = $db->connect()->prepare($insertar);
$query->execute();

if(!$query) {
    echo '<script>
        alert("Error al enviar solicitud");
        window.history.go(-1);
    </script>';
} else {
    echo '<script>
            alert("Se registró correctamente");
            window.location = "../vista_solicitud.php";
        </script>';
}

?>