// you are given a number stored in a varianle with the name N
// you have to map all the lowercase English character, to a number starting from 
// the value stored in N and incrementing it by 1 at every step
//for example consider the value stored in N=30 then the required o/p should be-
// a-30
// b-31
// to
// z-55 
// method 1st--------------------------------------------------------------
// let N = 30;
// let lower = "abcdefghijklmnopqrstuvwxyz";
// let obj = {}

// for (let i = 0; i < lower.length; i++) {
//     obj[lower[i]] = i + N;
// }
// for (let key in obj) {
//     console.log(key + "-" + obj[key]);
// }

//method 2nd---------------------------------------------------------------
let N = 30;
let lower = "abcdefghijklmnopqrstuvwxyz";
let obj = {}

for (let char of lower) {
    obj[char] = N;
    N++;
}
for (let key in obj) {
    console.log(key + "-" + obj[key]);
}
