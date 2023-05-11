const numbers = [3, 4]

// Adding at last
numbers.push(5, 6)

// Adding starting 
numbers.unshift(1, 2)

// Adding elements anywhere in an array 1st argument is for skipping 2nd for delete 3rd is value
numbers.splice(2, 0, 'a', 'b')
console.log(numbers);