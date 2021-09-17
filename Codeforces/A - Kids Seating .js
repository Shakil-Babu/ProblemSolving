var tc = parseInt(readline());
for (; tc--;){
 
  var number = parseInt(readline());
var multiply = 4*number;
var result = [];
for(var i = 1; i<=number;i++){
	var res = (multiply -=2);
	result.push(res);
}
print((result.join(' ')))
 
}