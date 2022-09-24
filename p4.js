// Map symbol
// you are given a variable stored in a variable with the name N
// you have to map the following symbols starting from the value N
// the mapping is such that the difference b/w the value of two character is 2
// '!','@','#','$','%','^','&','*'
// for example let N=10, the required o/p should be
// !-10
// @-12
// till-----------
// *-24

let N = 20;
let arr = ['!', '@', '#', '$', '%', '^', '&', '*'];
let obj = {};
for (let symbol of arr) {
    obj[symbol] = N;
    N = N + 2;
}
for (let key in obj) {
    console.log(key + "-" + obj[key]);
}