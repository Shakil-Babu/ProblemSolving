var tt = parseInt(readline());
for(; tt--;){
    var  number = parseInt(readline());
    var res = (number==1) ?0:(number==2) ? 1 : (2+number%2-(number==3));
    print(res)
}