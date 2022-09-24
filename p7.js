// Max and min frequency equation in array
// you are given an array stored in a variable with the name arr
// the size of arr is stored in a variable with the name N
// you have to solve the equation - 15*x + 2*y
// where x is the smallest frequency of an element in the array while,
//  y is the largest frequency of an element in the array
// for example consider the value stored in N=7, and arr=[1,2,2,3,3,3,5]
// the frequency of the different element in the arr are
// 1 -> 1
// 2 -> 2
// 3 -> 3 
// 5 -> 1
// the smallest frequency in the arraay is 1 with elements 1
// while the largest frequency in the array is 3 so the value of x=1, and y=3
// therefore the value of the equation becomes 15*[1] + 2*[3] =21 required answer

let arr = [1, 2, 2, 3, 3, 3, 5];
let N = 7;
let obj = {};
for (let el of arr) {
    if (obj[el] == undefined) {
        obj[el] = 1;
    } else {
        obj[el]++;
    }
}
let sum = 0;
let min = Infinity;
let max = -Infinity;
for (let key in obj) {
    if (obj[key] > max) {
        max = obj[key];
    }
    if (obj[key] < min) {
        min = obj[key]
    }
}
console.log(15 * min + 2 * max)