/* Dynamic Vs Static 
In static languages when we declare a variable the type of varibale is set and we cannot change it in future
In Dynamic like JS the type of variable can be change at run time
*/

// Example of dynamic typing
let name = 'Ajay'
console.log(typeof(name));
name = 1234
console.log(typeof(name));

let selectColor = null
console.log(typeof(selectColor)); //we will get obj