
// Naming Convention
// Camel Notation : oneTwoThreeFour
// Factory function
// For factory Function we will use Camel Notation
function createCircle(radius) {
    return {
        // radius: radius,
        radius,
        draw() {
            console.log('draw');
        }
        // draw: function () {  
        //     console.log('draw');
        // }
    };
}
const circle = createCircle(1)
console.log(circle);

const circle2 = createCircle(2)
console.log(circle2);