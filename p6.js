// Appear once
// you are given an array whose size is stored in a variable with the name N
// the array is stored in a variable with the name arr
// you have to find the sum of all elements of the array which area unique
// for example consider the value stored in N=7, 
// and the value stored in arr=[3,5,3,3,8,5,6]
// since there are two numbers that are unique i.e. 8 and 6
// then the required o/p will be 8+6=14

let N = 7;
let arr = [3, 5, 3, 3, 8, 5, 6];
let obj = {};
for (let num of arr) {
    if (obj[num] == undefined) {
        obj[num] = 1;
    } else {
        obj[num]++;
    }
}
let sum = 0;
for (let key in obj) {
    if (obj[key] == 1) {
        sum = sum + (Number(key));
    }
}
console.log(sum);