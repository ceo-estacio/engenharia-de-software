

const 
   $ = v => document.querySelector( v ),
   $$ = v => document.querySelectorAll( v ),
   _ = ( ...args ) => console.log( ...args ),
   _e = ( ...args ) => console.error( ...args )
;

window.addEventListener( "load", () => {
   const 
      C = $$( "[c]" ),
      BG = $$( "[bg]" ),
      Pd = $$( "[pd]" ),
      Focus = $$( "img" )
   ;



   C.forEach( c => c.style.color = c.getAttribute( "c" ) );
   BG.forEach( bg => bg.style.backgroundColor = bg.getAttribute( "bg" ) );
   Pd.forEach( pd => pd.style.padding = pd.getAttribute( "pd" ) );

   Focus.forEach( img => img.addEventListener( "click", ev => {
      // img.style.position = "absolute";
      // img.style.width = "90vw";
      // img.style.inset = "0";
   } ) );

} );