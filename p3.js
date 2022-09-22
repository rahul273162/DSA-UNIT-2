//map character and sum
// you are given a number stored in a variable with the name N
// you are also given an string whose length is stored in a variable name K
// and the string is stored in a variable with name str
// you have to map all lowercase English character starting from the value stored in N
// for example, if N=30, then the mapping if the char will be as follow
// a-30
// b-31
// to  
// z-55
// finally you have to print the sum of the characters, present in the string str.
// for example, if str="abc" then the required o/p should be
// 30+31+32 = 93

let N = 30;
let L = 3;
let str = "abc";
let obj = {}
let lower = "abcdefghijklmnopqrstuvwxyz";

for (let i = 0; i < lower.length; i++) {
    obj[lower[i]] = N++
}
let sum = 0;
for (let j = 0; j < str.length; j++) {
    sum = sum + obj[str[j]];
}
console.log(sum);