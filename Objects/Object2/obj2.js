// Object-Oriented Programming (OOP)
// OOP is basically a style of programming where we see a program as a collection of objects that talked to each other to perform some functionality
// If a function is part of Object then we call it is as method


const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 2
    },
    isVisible: true,
    draw: function () {  //method
        console.log('draw');
    }
};

circle.draw();

const circle2 = {
    radius: 1,
    location: {
        x: 1,
        y: 2
    },
    isVisible: true,
    draw: function () {  //method
        console.log('draw');
    }
};

circle.draw();