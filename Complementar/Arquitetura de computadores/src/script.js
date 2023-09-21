

const 
   $ = v => document.querySelector( v ),
   $$ = v => document.querySelectorAll( v ),
   _ = ( ...args ) => console.log( ...args ),
   _e = ( ...args ) => console.error( ...args )
;

window.addEventListener( "load", () => {
   const 
      NavLinks = $$( "navlink" ),
      C = $$( "[c]" ),
      BG = $$( "[bg]" ),
      Pd = $$( "[pd]" ),
      Focus = $$( "img" ),
      tAs = $$( "[t-a]" ),
      OCs = $$( "oc" )
   ;




   NavLinks.forEach( link => link.addEventListener( "click", ev => {
      window.open( link.getAttribute( "to" ), "_blank" );
   } ) );



   C.forEach( c => c.style.color = c.getAttribute( "c" ) );
   BG.forEach( bg => bg.style.backgroundColor = bg.getAttribute( "bg" ) );
   Pd.forEach( pd => pd.style.padding = pd.getAttribute( "pd" ) );
   tAs.forEach( t => t.style.textAlign = t.getAttribute( "t-a" ) );

   OCs.forEach( o => o.addEventListener(
      "click", ev => {
         if( o.getAttribute( "open" ) == "" ) {
            o.removeAttribute( "open" );
            o.lastElementChild.style.visibility = "collapse";
            o.lastElementChild.style.height = "0";
         } else {
            o.setAttribute( "open", "" );
            o.lastElementChild.style.visibility = "visible";
            o.lastElementChild.style.height = "auto";
         }
      }
   ) );

   Focus.forEach( img => img.addEventListener( "click", ev => {
   } ) );

} );