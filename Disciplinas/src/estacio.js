

addEventListener( "load", () => {

   /* == [ [capa] ]
   == == == == == == == == == */
   $$( "[capa]" ).forEach(
      cp => { return(
         cp.style.backgroundImage = `
            url( "${ cp.getAttribute( "capa" ) }" )
         `
      ); }
   );


   /* == [  ]
   == == == == == == == == == */
} );