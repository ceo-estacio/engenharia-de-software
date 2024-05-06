

   <?php 
      session_start();
      if( !isset( $SESSION[ "usuario" ] ) ) {
         header( "Location: form_login.php", true, 301 );
      } else {
   ?>      
      <!DOCTYPE html>
      <html lang="en">
      <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         
         <title>login php</title>
         
      </head>
      <body>
         <h1>Olá <?php echo( $_SESSION[ "usuario" ] ) ?> </h1>
         <h2>
            <a href="index.php">Home</a>
         </h2>
      </body>
      </html>
   <?php
      }
   ?>