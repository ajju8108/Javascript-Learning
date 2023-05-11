// Exercise 1

// let a = 'red';
// let b = 'blue'
// let c;
// c = a;
// a = b;
// b = c

// console.log(a);
// console.log(b);


// Exercise 2

// WAP that takes two numbers and return maximum of two.
// function maximum(num1, num2) {
// if (num1 > num2) {
//     return num1;
// }
// else {
//     return num2
// }

// if (num1 > num2) return num1;
// else return num2

// if (num1 > num2) return num1;
// return num2
//     return (num1 > num2) ? num1 : num2
// }

// console.log(maximum(1, 7));



// Exercise 3
// WAP to check the array and return number of truthy values.
// function isLandscape(width, height) {
// return (width > height) ? true : false
//     return (width > height);
// }
// console.log(isLandscape(20, 900));



// Exercise 4
// WAP for FizzBuzz
// function FizzBuzz(input) {

//     if (typeof (input) !== 'number') {
//         // return ("Not a number");
//         return NaN
//     }
//     if (input % 3 === 0 && input % 5 === 0) {
//         return ("FizzBuzz");
//     }
//     if (input % 3 === 0) {
//         return ("Fizz");
//     }
//     if (input % 5 === 0) {
//         return ("Buzz");
//     }

//     return input

// }
// console.log(FizzBuzz('5'));



// Exercise 5
// Speed limit is 70. Every 5 km above the speed limit we are getting 1 point. If a driver get more than 12 points then licence is suspended."

// checkSpeed(75.1)
// function checkSpeed(speed) {
//     const speedlimit = 70;
//     const kmPerPoint = 5
//     if (speed < speedlimit + kmPerPoint) {
//         console.log("OK");
//     }
//     else {
//         const points = Math.floor((speed - speedlimit) / kmPerPoint)
//         if (points >= 12) {
//             console.log("License Suspended");
//         }
//         else {
//             console.log('Points', points);
//         }
//     }

// if (speed < speedlimit + kmPerPoint) {
//     console.log("OK");
//     return
// }
// const points = Math.floor((speed - speedlimit) / kmPerPoint)
// // console.log("POOINTSS", points);
// if (points >= 12) {
//     console.log("License Suspended");
// }
// else {
//     console.log('Points', points);
// }

// }

// Exercise 6
//WAP to show number number with even or odd
// showNumbers(10);
// function showNumbers(limit) {
//     for (let i = 0; i <= limit; i++) {
// if (i % 2 === 0) {
//     console.log(i, "Even");
// }
// else {
//     console.log(i, 'ODD');
// }
// console.log();
//         const message = (i % 2 === 0) ? "Even" : "Odd"
//         console.log(i, message);
//     }
// }



// Exercise 7
// WAP to check the array and return number of truthy values.

// const array = [0, null, undefined, '', 2, 3]
// console.log(countTruthy(array));

// function countTruthy(array) {
//     let count = 0;
//     for (let value of array) {
//         if (value) {
//             count++;
//         }

//     }
//     return count;
// }



// Exercise 8
// WAP to get the string properties from the object
// const movie = {
//     title: 'a',
//     releaseYear: 2018,
//     rating: 4.8,
//     director: 'b'

// }
// showProperties(movie);

// function showProperties(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] === 'string') {
//             console.log(key, obj[key]);
//         }
//     }

// }


// Exercise 9
// WAP to get Sum of Multiples of 3 and 5
// console.log(sum(10));
// function sum(limit) {
//     let sum = 0;
//     for (let i = 0; i <= limit; i++) {
//         if (i % 3 === 0 || i % 5 === 0) {
//             sum += i;
//         }
//     }
//     return sum
// }



// Exercise 10
// WAP to calculate grade of student

const marks = [80, 80, 50]
console.log(calculateGrade(marks));
function calculateGrade(marks) {
    const average = calculateAverage(marks);
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A'
}

function calculateAverage(array) {
    let sum = 0;
    for (let value of array) {
        sum += value;
    }
    return sum / array.length;
}