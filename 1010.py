firstLine = input().split(' ')
code1,unit1,price1= firstLine


secondLine = input().split(" ")
code2,unit2,price2 = secondLine 


total = (int(unit1) * float(price1)) + (int(unit2) * float(price2))
print('VALOR A PAGAR: R$ %0.2f'%total)