var word = String(readline());
var f = (/[A-Z]/g).test(word[0]);
if(f){
    print(word);
}else{
    var intoArray  = word.split('');
    intoArray[0] = intoArray[0].toUpperCase();
    print(intoArray.join(''))
 
}