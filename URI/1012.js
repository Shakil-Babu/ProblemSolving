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
var ar2 = readline().split(' ').map(x => parseFloat(x));
var A= ar2[0], B= ar2[1], C= ar2[2];
var pi =3.14159 ;

var triangle = ((A*C)/2).toFixed(3);
var circle = (pi * (C*C)).toFixed(3);
var trapiziam =(C*(A+ B)/2).toFixed(3);
var square = (B*B).toFixed(3);
var rectangle = (A*B).toFixed(3);

print(`TRIANGULO: ${triangle}\nCIRCULO: ${circle}\nTRAPEZIO: ${trapiziam}\nQUADRADO: ${square}\nRETANGULO: ${rectangle}`)



}