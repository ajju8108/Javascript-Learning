
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}
const circle = createCircle(9)

// Constructor Function  
function MyCircle(radius) {
    this.radius = radius
    this.draw = function () {
        console.log('draw');
    }
}
const another = new MyCircle(9)