const numbers = [1, 2, 3, 1, 4]


// it will return the index number of element and also 2nd para is for starting the search index
console.log(numbers.indexOf(1, 2));


// it will return the last occurence of the given value in the parameter
console.log(numbers.lastIndexOf(3));


// it will return true if the value is 
console.log(numbers.indexOf(1) !== -1);

// Best way to find 
console.log(numbers.includes(9));