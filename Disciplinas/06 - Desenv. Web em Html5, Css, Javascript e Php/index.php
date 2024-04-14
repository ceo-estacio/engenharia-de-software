

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   
   <title>login php</title>
   
</head>
<body>
   <h1>Login</h1>
   <h2>
      <a href="protected.php">pagina inicial</a>
   </h2>
   
   <?php 
      session_start();
      if( isset( $SESSION[ "usuario" ] ) ) {
   ?>      
         <a href="logout.php">sair</a>
   <?php
      }
   ?>
</body>
</html>