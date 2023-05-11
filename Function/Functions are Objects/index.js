function MyCircle(radius) {
    this.radius = radius
    this.draw = function () {
        console.log('draw');
    }
}
const another = new MyCircle(9)