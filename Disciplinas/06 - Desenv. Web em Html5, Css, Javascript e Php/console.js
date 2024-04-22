

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

/* 
<style>
.FreeTrialBanner_container__AjFZ_,
.ViewAnswerCTA_view-answer-cta__jDe9H.AnswerExperiment_view-answer-box-overlay__K9aBO.AnswerExperiment_free-trial__xKVfT.test-blocked-answer {
   display: none;
}
* { filter: none !important; }
</style>
*/