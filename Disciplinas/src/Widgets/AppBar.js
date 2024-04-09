

// import CLB from "../lib/clb";
// const CLB = require( "../lib/clb" );
const CLB = [
   _ = ( ...v ) => console.log( ...v )
   ,
   $ = v => document.querySelector( v )
   ,
   $$ = v => document.querySelectorAll( v )
   ,
   $a = ( e, a ) => e.getAttribute( a )
];


// export default function AppBar( props ) {
function AppBar( props ) {
   $$( "appbar" ).forEach( a => {
      return( a.innerHTML = `
         <style>
            appbar {
               display: flex;
               flex-direction: column;
               width: 100%;
               height: 72px;
               background: #181a1b;
               box-shadow: #0005 0 0 10px;
               position: sticky;
               top: 0;
               left: 0;
               z-index: 9;
            }

            appbar > home {
               display: flex;
               flex: 1;
            }
            
            appbar-options {
               display: flex;
               flex: .15;
               align-items: center;
               justify-content: center;
               font-size: 1.7rem;
               color: #999;
            } 
            
            drawer-btn {
               cursor: pointer;
            }

            appbar-logo {
               display: flex;
               flex: .7;
               align-items: center;
               justify-content: center;
            } appbar-logo > img {
               height: 95%;
            }
         </style>
         <home>
            <appbar-options>
               <drawer-btn>
                  &#9776;
               </drawer-btn>
            </appbar-options>
            <appbar-logo>
               <img src="./src/assets/img/Estácio-logo white.svg" alt="">
            </appbar-logo>
            <appbar-options></appbar-options>
         </home>         
      `)
   } );
}