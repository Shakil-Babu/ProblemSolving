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

function main() {

var number = parseInt(readline());

var y = Math.floor(number/365);
var m = Math.floor((number %365)/30) ;
var d = (number % 365)%30;

print(y+" ano(s)")
print(m+" mes(es)")
print(d+" dia(s)")
}