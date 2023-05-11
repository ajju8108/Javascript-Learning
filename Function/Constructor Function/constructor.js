
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

// Constructor Function  
function MyCircle(radius) {
    this.radius = radius
    this.draw = function () {
        console.log('draw');
    }
}
const circle = new MyCircle(9)
console.log(circle.draw);