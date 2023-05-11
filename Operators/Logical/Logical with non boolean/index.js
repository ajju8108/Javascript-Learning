// Falsy (false)
// Undefined
// null
// 0
// false
// ''
//NaN

// Anything that is not falsy is Truthy

// let userColor = 'red';
let userColor = undefined;
let defaultcolor = 'blue';
let currentColor = userColor || defaultcolor;
console.log(currentColor);