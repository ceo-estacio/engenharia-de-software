

addEventListener( "load", () => {
   $$( "[capa]" ).forEach(
      cp => {
         cp.style.backgroundImage = `
            url( "${ cp.getAttribute( "capa" ) }" )
         `;
      }
   );
} );