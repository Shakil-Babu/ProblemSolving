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
var inputSeconds = parseInt(readline());
var hour = Math.floor(inputSeconds/3600 );
var min = Math.floor((inputSeconds%3600)/60 );
var sec = inputSeconds%60 ;

print(`${hour}:${min}:${sec}`)

}