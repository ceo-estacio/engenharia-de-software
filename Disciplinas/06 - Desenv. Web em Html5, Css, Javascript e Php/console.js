

function somar(num) {
   var total = 0;
   for (var x = 0; x < num; x++) {
      total += x;
   }
   return total;
}

let result = somar( 15 );

console.log( result );

console.log( "=============" );
var frutas = new Array("banana", "laranja", "limão");

frutas.shift();
frutas.splice(1, 1, "uva");

for (var i = 0; i < frutas.length; i++) {
   console.log(frutas[i] + " | ");
}
console.log( "=============" );




function faz (n) {
   var s = n.toString();
   var variavel = 0;
   for (var char of s) {
	  var d= parseInt(char);
 	  variavel += d;
   }
   return variavel;
}
var resultado = faz(123123);
console.log("Resultado: ", resultado);