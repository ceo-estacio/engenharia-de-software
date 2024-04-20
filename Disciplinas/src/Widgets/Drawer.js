

// import CLB from "../lib/clb";
// const CLB = require( "../lib/clb" );


// export default function AppBar( props ) {
function Drawer( props ) {
   $$( "drawer" ).forEach( d => {
      return( d.innerHTML = `
         <style>
            drawer {
               display: none;
               flex-direction: column;
               width: clamp( 100px, 75dvw, 350px );
               width: 0;
               height: 100dvh;
               background: #1b1d22;
               box-shadow: #0009 0 0 5px;
               position: fixed;
               top: 0;
               left: 0;
               transition: all 0s 3s cubic-bezier(0.68, -0.55, 0, 1.31);
               z-index: 9;
            }

            drawer > header {
               display: flex;
               flex: 1;
            }

            drawer > content {
               display: flex;
               flex: 1;
            }
            
            drawer > footer {
               display: flex;
               flex: .1;
               align-items: center;
               justify-content: center;
               font-size: 1.7rem;
               color: #999;
            } 
            drawer > footer > content {
               flex: .8;
               border: #fff 1px dashed;
            }
            drawer > footer > close-btn {
               display: flex;
               flex: .2;
               border: #fff 1px dashed;
               align-itens: center;
               justify-content: center;
            }

            .openD {
               display: flex;
               animation: openD-anim .15s ease-in-out;
               width: clamp( 100px, 75dvw, 350px );
            }

            .closeD {
               animation: closeD-anim .15s ease-in-out;
            }
   
            @keyframes openD-anim {
               0% { width: 0; opacity: 0; }
               20% { display: flex; }
               100% { width: clamp( 100px, 75dvw, 350px ); opacity: 1; }
            }
            @keyframes closeD-anim {
               0% {  }
               75% { width: 10px; opacity: .15; }
               100% { width: 0; opacity: 0; }
            }
         </style>
         <header>
         </header>
         <content>
         </content>   
         <footer>
            <content></content>
            <close-btn>&times;</close-btn>
         </footer>      
      `);
   } );
}

addEventListener( "load", () => {
   $( "drawer" ).classList.add( "closeD" );
   $( "drawer-btn" ).addEventListener( "click", () => {
      $( "drawer" ).classList.toggle( "openD" );
      $( "drawer" ).classList.toggle( "closeD" );
   } );
   $( "close-btn" ).addEventListener( "click", () => {
      $( "drawer" ).classList.toggle( "openD" );
      $( "drawer" ).classList.toggle( "closeD" );
   } );
} );