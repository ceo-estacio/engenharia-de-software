

exports._ = ( ...args ) => console.log( ...args );


exports.NumberOfMemoryCells = async ( 
   totalRam,      
   /* Descubra a capacidade total da memória RAM em bytes. 
      Normalmente, a capacidade da RAM é indicada em gigabytes (GB) 
      ou terabytes (TB). Você precisará converter essa capacidade para bytes
   */
   eachCellSize   
   /* tamanho de cada célula de memória em bytes. 
      Normalmente, as células de memória em RAM são organizadas em grupos de 8 bits, 
      chamados de bytes. Portanto, o tamanho de cada célula é 1 byte.
   */
) => totalRam / eachCellSize;









size = this.NumberOfMemoryCells( 500, 5 );
this._( {size} );

this._( 2 ** 22 );
// q2 = this.NumberOfMemoryCells(  );