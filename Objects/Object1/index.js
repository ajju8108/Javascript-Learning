/* Reference Type
 Object
 Arrays
 Function are of refrence type
*/
/* OBJECT 
When we are dealing with multiple related values we can put these variables inside of an object 
*/
// let name = 'mosh';
// let age = 30;
let person = {
    name:'mosh',
    age:30
};
// Now we have a person object with two properties or 2 key value pairs name and age
console.log(person);
// There are two types by which we can access or change the value of object 

// Dot Notation
person.name = 'john';
console.log(person.name);

// Bracket Notation
person['name'] = 'Marsh'
console.log(person['name']);