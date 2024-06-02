

const CLB = [
   _ = ( ...v ) => console.log( ...v )
   ,
   $ = v => document.querySelector( v )
   ,
   $$ = v => document.querySelectorAll( v )
   ,
   $a = ( e, a ) => e.getAttribute( a )
];

// export default CLB;

addEventListener( "load", () => {

   $$( "navlink" ).forEach( link => {
      link.outerHTML = `<p>
         <a href="${ link.getAttribute( "to" ) }" target="_blank">
            ${ link.innerText }
         </a>
      </p>`;
   } );

} );