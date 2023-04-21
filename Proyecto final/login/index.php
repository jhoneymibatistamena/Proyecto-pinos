<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Login</title>
    <link rel="icon" href="/login/img/WhatsApp_Image_2023-03-11_at_12.57.26_PM-removebg-preview.png">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <div class="login-box">
        <img src="img/logo.jpg" class="avatar" alt="Avatar Image">
        <h1>Register</h1>
        <form method="post" action="http://localhost/proyecto%20final/menu%20hamburguesa/">
            <!-- USERNAME INPUT -->
            <label>Username</label>
            <input name="name" type="text" placeholder="Enter Username" required>
            <!-- PASSWORD INPUT -->
            <label>Password</label>
            <input name="password" type="password" placeholder="Enter Password" required>
            <input type="submit" name="register" value="Entrar">
        </form>
    </div>
    <?php
    include("register.php");
    ?>
</body>
</html>