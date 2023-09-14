

exports._ = ( ...args ) => console.log( ...args );


exports.NumberOfMemoryCells = ( 
   ram,        
   type 
) => {
   /* 
      1k 2**10 1.024          10**3    1000
      1m 2**20 1.048.576      10**6    1.000.000
      1g 2**30 1.073.741.824  10**9    1.000.000.000
      1t 2**40 1.099.511...   10**12   1.000.000.000.000

      000 001 010 011 100 101 110 111
   */
   switch( type ) {
   case "k": return ram * 2 ** 10;
      break;
   case "m": return ram * 2 ** 20;
      break;
   case "g": return ram * 2 ** 30;
      break;
   case "t": return ram * 2 ** 40;
      break;
   }
};









size = this.NumberOfMemoryCells( 4, "m" );
this._( {size} );

this._( 2 ** 2 * 2 ** 20 );
// q2 = this.NumberOfMemoryCells(  );