

// import CLB from "../lib/clb";
// const CLB = require( "../lib/clb" );
// import iconus from "../lib/iconus/icn_home";

// export default function AppBar( props ) {
function SideBar( props ) {
   $$( "sidebar[estacio]" ).forEach( d => {
      return( d.innerHTML = `
         <style>
            sidebar {
               display: none;
               flex-direction: column;
               width: 64px;
               height: 100dvh;
               background: #1b1d22;
               position: fixed;
               top: 0;
               left: 0;
               /*transition: all 0s 3s cubic-bezier(0.68, -0.55, 0, 1.31);*/
               z-index: 9;
            }

            sidebar > contents {
               display: flex;
               padding: 16px 8px;
               flex-direction: column;
               width: 100%;
               height: 100%;
               
            }

            sidebar > contents > header {
               display: flex;
               flex-direction: column;
               flex: 1 1 0%;
            }
            sidebar > contents > content {
               display: flex;
               flex-direction: column;
               flex: 7 1 0%;
            }
            sidebar > contents > footer {
               display: flex;
               flex-direction: column;
               justify-content: flex-end;
               flex: 1 1 0%;
            }

            sb-icon {
               width: 24px;
               height: 24px;
            } sb-icon > * {
               width: 100%;
               height: 100%;
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
         <contents>
            <header>
               <sb-icon>
                  ${ icn_home }
               </sb-icon>
            </header>
            <content></content>
            <footer></footer>
         </contents>      
      `);
   } );
}

SideBar();

// <img src="./Disciplinas/src/assets/img/iconus/home.svg">


// addEventListener( "load", () => {
//    $( "drawer" ).classList.add( "closeD" );
//    $( "drawer-btn" ).addEventListener( "click", () => {
//       $( "drawer" ).classList.toggle( "openD" );
//       $( "drawer" ).classList.toggle( "closeD" );
//    } );
//    $( "close-btn" ).addEventListener( "click", () => {
//       $( "drawer" ).classList.toggle( "openD" );
//       $( "drawer" ).classList.toggle( "closeD" );
//    } );
// } );