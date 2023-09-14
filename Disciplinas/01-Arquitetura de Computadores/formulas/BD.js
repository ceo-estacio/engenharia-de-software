

_ = ( ...args ) => console.log( ...args );


busSpeed = ( 
   v, // = velocidade em Hz - frequencia de operação
   l  // = largura quantidade de fios do BD
) => {
   /* 
      1 Hz = 1 bps
      velocidade = 20Hz
      largura = 2 bits
      20 * 2 = 40 bits

      1Hz   = 1 ciclo por segundo
      1MHz  = 10**6
      1GHz  = 10**9

      ex:
         BD com 10 bits e clock de 100MHz, qual a capacidade de transferência
         T = l * v,
         T = 10 x 100 Mbps
         = 10 * 10**2 * 10**6 bps
         = 10**9 bps = 1Gbps

   */
   const 
      t = l * v   // = taxa de  transferência do barramento
   ;

   return `${v}Hz * ${l}Bit/s = ${ v * l } Bit/s`;
};






size = busSpeed( 20, 2 );
// _( size );

_( 10**9 );

/* ========== */
/* 
sc = {
   cpu: 2GHz,
   pinos: 204,
   ram: 4GB
   vBUS: 400MHz,
   BC: 132 fios,
   T:
}

CPU_pinos: 204 = BC: 132, BE: , BD:

BE: 2**BE = 4GB
BE = 32 fios
BD = 204 - BC - BE // 40 bits/fios

T = v: vBus * l: BD
T = 400MHz * 40bits // 
*/