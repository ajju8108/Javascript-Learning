
//EXERCISE !
//WAP to print values that lies between min & max
/* const numbers = arrayFromRamge(-10, 0)
console.log(numbers);
function arrayFromRamge(min, max) {
    let array = [];
    for (let i = min; i <= max; i++) {
        array.push(i)
    }
    return array
} */



//EXERCISE 2
//WAP to check that the element present in an array or not
/* const numbers = [1, 2, 5]
const result = includes(numbers, 2)
console.log(result);

function includes(numbers, searchElement) {
    for (let values of numbers) {
        if (searchElement === values) {
            return true
        }
    }
    return false
} */

//EXERCISE 3
//WAP to remove matching item in an array by comparing two array

/* const numbers = [1, 4, 6]
const output = except(numbers, [1, 6])
console.log(output);

function except(array, excluded) {
    const output = []
    for (let element of array) {
        if (!excluded.includes(element))
            output.push(element)
    }
    return output;
} */

//EXERCISE 4
//WAP to shift the index based on offset in array
/* const numbers = [1, 4, 6]
const output = move(numbers, 0, 0)
console.log(output);

function move(array, index, offset) {
    const position = index + offset;
    if (position >= array.legth || position < 0) {
        console.error('Invalid offset');
    }
    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(index + offset, 0, element);
    return output

} */



//EXERCISE 5
//WAP to find the occurance of element in an array


/* const numbers = [1, 4, 6, 9, 4, 1, 6]
const count = countOccurrence(numbers, 1)
console.log(count);

function countOccurrence(array, searchElement) {
    //  let count = 0;
    //  for (let element of array) {
    //      if (element === searchElement) {
    //          count++;
    //      }
    //  }
    //  return count

    return array.reduce((accumlator, current) => {
        const occurance = (current === searchElement) ? 1 : 0;
        console.log(accumlator, current, searchElement);
        return accumlator + occurance
    }, 0)
} */



//EXERCISE 6
//WAP to find max element in an array

