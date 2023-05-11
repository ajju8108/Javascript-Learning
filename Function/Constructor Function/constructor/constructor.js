
// Naming Convention
// Pascal Notatio : OneTwoThreeFour
// For Constructor we will use Pascal Notation
// function createCircle(radius) {
//     return {
//         radius,
//         draw() {
//             console.log('draw');
//         }
//     };
// }


// This references an empty obj 
// When we use new operator 3 things happen first it will an empty obj then it will set "this" to point at the empty object and finally it will return the obj from the constructer function 

// Constructor Function  
function MyCircle(radius) {
    this.radius = radius
    this.draw = function () {
        console.log('draw');
    }
}
const circle = new MyCircle(9)
console.log(circle.draw);