import math 
inputSeconds = int(input());
hour = math.floor(inputSeconds/3600 );
Min= math.floor((inputSeconds%3600)/60 );
sec = inputSeconds%60 ;

print(str(hour)+":"+str(Min)+":"+str(sec))