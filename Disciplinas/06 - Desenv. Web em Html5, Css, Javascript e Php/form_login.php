

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   
   <title>form login</title>
   
</head>
<body>
   <h1>Login</h1>

   <?php 
      if( isset( $_GET[ "erro" ] ) ) {
         echo( "<hr /><h2>".$_GET[ "erro" ]."</h2><hr />" );
      }
   ?>

   <form action="login.php" method="post">
      <label>
         login:
         <input type="text" name="login" placeholder="login">
      </label>
      <label>
         senha:
         <input type="password" name="senha" placeholder="senha">
      </label>
      <input type="submit" value="enviar">
   </form>
</body>
</html>