// you are given a number stored in a varianle with the name N
// you have to print the first N english smaller case alphabates,
// mapped with the value starting from 1 to N. including the value stored in N.
// for example consider the value stored in N=3 then the required o/p will be
// a-1
// b-2
// c-3
// rule 1st-------------------------------------

// let n = 5;
// let lower = "abcdefghijklmnopqrstuvwxyz";
// let obj = {}

// for (let i = 0; i < n; i++) {
//     obj[lower[i]] = i + 1;

// }
// for (let key in obj) {
//     console.log(key + "-" + obj[key]);
// }

// rule 2nd--------------------------------------

let n = 5;
let lower = "abcdefghijklmnopqrstuvwxyz";
let obj = {}
let count = 1;

for (let char of lower) {
    obj[char] = count
    count++;
    if (count > n) {
        break;
    }
}
for (let key in obj) {
    console.log(key + "-" + obj[key]);
}