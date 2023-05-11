const circle = {
    radius: 1,
    draw: function () {
        console.log('draw');
    }
}

/*
Not recommended
const another = {}
for (let key in circle) {
    another[key] = circle[key]
} */

// const another = Object.assign({ color: 'yellow' }, circle)

// const another = { ...circle, color: 'yellow' }
// console.log(another);