// Checking the value is posotive or not the call back function will gonna run on every element in the given array also as soon it will find any element that is not matching the given criteria it will stop searching
const numbers = [1, -2, 3]
const allPositive = numbers.every(function (value) {
    return value >= 0
})
console.log(allPositive);


// const atLeastOnePsoitive = numbers.some(function (value) {
//     return value >= 0
// })
// console.log(atLeastOnePsoitive);