

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
      Pd = $$( "[pd]" )
   ;



   C.forEach( c => c.style.color = c.getAttribute( "c" ) );
   BG.forEach( bg => bg.style.backgroundColor = bg.getAttribute( "bg" ) );
   Pd.forEach( pd => pd.style.padding = pd.getAttribute( "pd" ) );

} );