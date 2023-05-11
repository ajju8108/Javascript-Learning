//  a function is basically a set of statements that performes a task or calculate a value

// Here 'name' is the parameter for the greet function

// This is function is performaing a task
function greet(name, lastName){
    console.log('Hello ' + name + ' '+lastName);
}

// Function calculating a vlaue
function square(numer){
    return numer * numer
}

// Here "john" is a argument of the greet function
greet('John', 'Smith');
let number = square(2)
console.log(number);
// greet('Mary');