

## lp:
   forma de alto nível para ensinar o computador
   a realizar uma tarefa

## tarefa / programa
   tradução de um algoritmo

## algoritmo
   sequencia de passos para resolver um problema




#################################
### Linguagem de baixo nível de abstração
linguagem de montagem e Assembly

### Linguagem de alto nível de abstração
mais próximo à linguagem humana.

___
#

> # computador
   > em 3 modulos / sub-sistemas     
   - ### processador
      > realizar as tarefas diretamente no hardware
   - ### memória
      > armazenar e recuperar valores
   - ### sistema de entrada e saída
      > ligar o mundo exterior com o mundo interno da máquina

a comunicação entre esses sistemas é feita por sinais elétricos através do barramento


___
## barramento ( bus )
      sistema de comunicação que transfere dados
      e sinais de controle, entre componentes dentro de um computador
   ### tipos
   - Dados: BD
      > São bidirecionais, transportam bits de 
      dados  entre o processador e outro componente, vice-versa.
      
   - Endereços: BE
      > São unidirecionais, transportam bits de um 
      endereço de acesso 
       de memória ou de um dispositivo de E/S, do processador para o controlador do barramento.

   - Controle: C
      > Possuem fios que enviam sinais específicos de controle e comunicação
       durante uma determinada operação.

A soma dos fios do BC + BD + BE é igual ao total de pinos do processador ou total de furos do soquete, ou seja: Totalpinos = BD + BE + BC.


- 8 bits = 1 byte

- calculo para quantidade de celulas de memoria
   > n = // n° de celulas de memoria endereçaveis
   > n = 2 elevado a L
      // 2 computador works on binary
      // L = largura de endereços do BE
   > 