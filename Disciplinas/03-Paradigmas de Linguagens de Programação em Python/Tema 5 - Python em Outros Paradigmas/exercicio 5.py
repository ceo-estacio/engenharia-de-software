

def multiplicar_por(multiplicador):
   """ def multi(multiplicando):
      print( {multiplicando} );
      return multiplicando * multiplicador;
   
   return multi; """
   return lambda multiplicando: multiplicando * multiplicador


def main():
   multiplicar_por_10 = multiplicar_por(10);
   print(multiplicar_por_10(1));
   print(multiplicar_por_10(2));
 
   multiplicar_por_5 = multiplicar_por(5);
   print(multiplicar_por_5(1));
   print(multiplicar_por_5(2));


multiplicar_por( 10 );
main();