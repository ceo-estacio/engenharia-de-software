

_ = ( ...args ) => console.log( ...args );


NumberOfMemoryCells = ( 
   ram,        
   type 
) => {
   /* 
      1k 2**10 1.024          10**3    1000
      1m 2**20 1.048.576      10**6    1.000.000
      1g 2**30 1.073.741.824  10**9    1.000.000.000
      1t 2**40 1.099.511...   10**12   1.000.000.000.000

      000 001 010 011 100 101 110 111

      n = 2**l

      4 = 2**l
      2**2 * 2**20 = 2**22
      
      8 = 2**l
      2**3 * 2**20 = 2**23

      ex:
         BE com 6 fios, qual a capacidade do HW
         N = 2**l
         N = 2**6 fios
         l = 64 endereços (0 a 63)

      ex:
         CPU com 10 pinos, qual a capacidade do HW
         N = 2**l
         N = 2**10 pinos
         l = 1024 endereços (0 a 1023)
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









size = NumberOfMemoryCells( 4, "m" );
_( {size} );

_( "r:", 2**1 );
// 2;
// 4;
// 8;
// 16;
// 32;
// 64;
// q2 = this.NumberOfMemoryCells(  );