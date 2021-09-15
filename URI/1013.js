"use strict";
process.stdin.resume();
process.stdin.setEncoding("utf-8");
function print(x) {
console.log(x);
}
let inputString = "";
let currentLine = 0;
process.stdin.on("data", (inputStdin) => {
inputString += inputStdin;
});
process.stdin.on("end", () => {
inputString = inputString.split("\n");
main();
});
function readline() {
return inputString[currentLine++];
}
// ************************ Code Start ***************************
function main() {
var numbers = readline().split(' ').map(x => parseInt(x));
var a =numbers[0] , b= numbers[1] , c = numbers[2];

  var tmp = a;
  if(a < b || a < c){
   if(b < c){
    tmp = c;
   }else{
    tmp = b;
   }
  }
  
print(`${tmp} eh o maior`);
}