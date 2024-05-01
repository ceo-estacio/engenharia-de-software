

addEventListener( "load", () => {


   /* == [ nav-link ] 
   == == == == == == == == == */
   $$( "nav-link" ).forEach( nl => {  
      _( "oi" );
      nl.outerHTML = `
         <p>
            <a href="${ nl.getAttribute( "to" ) }"
               target="_blank" >
               ${ nl.innerText }
            </a>
         </p>
      `;
   } );


} );  // addEventListener