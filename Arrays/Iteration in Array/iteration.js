const number = [1, 2, 3, 4]

// 1st solution for of
for (let key of number) {
    console.log(key);
}


// 2nd solution  we can also give the 2nd parameter index for index of element in an array
number.forEach((num) => {
    console.log(num);
})

