var tc = parseInt(readline());
for (; tc--;){
var sentence = String(readline()).toLowerCase();
var intoArray = sentence.split('');
 
if(intoArray.length > 10){
    var first = intoArray[0], last = intoArray.slice(-1);
    var wordNumber = intoArray.length -2 ;
    var arrageLikeArray = [first, wordNumber , last].join('');
    print(arrageLikeArray);
 
}else{
    print(sentence);
}
 
}