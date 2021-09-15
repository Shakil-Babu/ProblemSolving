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

var name=readline();
var salary=parseFloat(readline());
var sale=parseFloat(readline());
var extraSalary = (sale * 0.15);
var completeSalary = (extraSalary + salary).toFixed(2);
print('TOTAL = R$ '+completeSalary);
}
