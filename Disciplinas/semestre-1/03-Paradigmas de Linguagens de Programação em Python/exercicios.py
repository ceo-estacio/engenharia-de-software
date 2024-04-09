

""" observe a função print do código escrito em Python a seguir: """
""" 
def foo(n):
   if n > 1:
      return n * foo(n-1)
   return n

print( foo(4) )
# 24
 """

# ===========================================

""" O trecho de código Pythoné uma função recursiva 
para o cálculo do fatorial de um número natural qualquer.
Entretanto, apresenta um erro de programação."""
""" 
def Fatorial( n ):
   if( n == 1 ) or ( n == 0 ):
      return 1
   else:
      # return n * (n - 1) * (n - 2) * (n - 3) * (n - 4) * (n - 5);
      return Fatorial( n - 1 ) * n;

print( Fatorial(6) )
 """

# ============================================

""" Considere o trecho de um programa escrito em Python: """
""" 
a= 0
for i in range( 30 ):
   if a % 2 == 0:
      a += 1
      continue
   else:
      if a % 5 == 0:
         break
      else:
         a += 3

print( a )
# 5
 """

# ===========================================

""" Observe o código abaixo em Python: """
""" 
a, b = 0, 1

while b < 10:
   print( b )
   a, b = b, a + b
# 1 1 2 3 5 8
 """


# ===========================================
""" 
# x = int( input() )
x = 10
y = 3

x = x % y
x = x % y
y = y % x

print( y )
# 0

 """


# =============
""" 
print( (True + 2)**2 )
# 9
 """


# ================
""" 
a = 1
while a < 10:
   if a % 2 == 0:
      break
   else:
      a += 1

print( a )
# 2
 """


# =================
""" 
def f(n):
   if n < 3:
      return n-1
   else:
      return f(n-2) + f(n-1)
   
print( f(10) )
# 34
 """


# ============

class A:
   a = 1

class B(A):
   _c = 3

   def __init(self):
      print( self.a )
      print( self._c )

a = A()
print( isinstance(a, B))

b = B()
print( isinstance(b, B))

b = A()
print( isinstance(b, A))