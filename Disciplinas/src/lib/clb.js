

const CLB = [
   _ = ( ...v ) => console.log( ...v )
   ,
   $ = v => document.querySelector( v )
   ,
   $$ = v => document.querySelectorAll( v )
   ,
   $a = ( e, a ) => e.getAttribute( a )
];

export default CLB;