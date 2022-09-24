// characters of 1D array ||
// you are given an string whose size is stored in variable with the name N
// the string is stored in a variable with the name str
// Each examples of the string contains one of these symbols @,%,&,#,^
// the symbols represents the following value 
// @ -> 0
// % -> 1
// & -> 2
// # -> 3
// ^ -> 4
// you have to genarate an string such that each symbol is replaced by its value
// for example let N=5, and the value stored in str=@%&#^
// therefore replacing each value with its value we get 01234, which is the requires and.

let str = "@%&#^";
let N = 5;
let arr = ["@", "%", "&", "#", "^"];
let obj = {};
for (let i = 0; i < 5; i++) {
    obj[arr[i]] = i;
}
let bag = "";
for (let char of str) {
    bag = bag + obj[char];
}
console.log(bag);