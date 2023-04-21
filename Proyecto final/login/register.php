<?php

include("con_db.php");


if (isset($_POST['register'])) {
    if (strlen($_POST['name']) >= 1 && strlen($_POST['password']) >= 1 ) {
        $name = trim($_POST['name']);
        $password = trim($_POST['password']);
        $fechareg = date("d/m/y");
        $consulta = "INSERT INTO datos(nombre, contraseña, fecha_reg) VALUES ('$name','$password','$fechareg')";
        $resultado = mysqli_query($conex,$consulta);
    }
}


?>