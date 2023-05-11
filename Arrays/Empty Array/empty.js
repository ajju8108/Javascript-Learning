// this will number =[] this will not work on const 

// Solution 1
// const number = [1, 2, 4, 6]
// Emptying array like this will also not work if any other variable will be pointing to the same refrence
let number = [1, 2, 4, 6]
let anotherNumber = number
// number = []
// console.log(number);
// console.log(anotherNumber);

// Solution 2
// number.length = 0


//Solution 3
// number.splice(0, number.length)


// Solution 4
// Using while loop on length of an array
while (number.length > 0) {
    number.pop
    number.length--
}
console.log(number);
console.log(anotherNumber);
