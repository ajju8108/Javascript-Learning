const number = [1, 2, 3, 4, 5, 6]

// last
// pop
/* const popElement = number.pop()
console.log(popElement);
console.log(number); */


// start
//shift
/* const shiftElement = number.shift()
console.log(shiftElement);
console.log(number); */


// from anywhere in an array
//splice 1st pararmeter will delete the element from index number 3
const spliceElement = number.splice(3, 1,)
console.log(spliceElement);
console.log(number);