import math 
number = int(input());
y = math.floor(number/365);
m = math.floor((number %365)/30) ;
d = (number % 365)%30;

print(str(y)+" ano(s)")
print(str(m)+" mes(es)")
print(str(d)+" dia(s)")