import math
firstLine = input().split(" ")
x1,y1 = firstLine 

secondLine = input().split(" ")
x2,y2 = secondLine

r = (float(x2)-float(x1))**2 + (float(y2)-float(y1))**2 
result = math.sqrt(r)
print("%.4f"%result)