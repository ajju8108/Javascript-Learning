const course = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' }
];
const found = course.find(function (course) {
    return course.name === 'a'
})

const found2 = course.findIndex(function (course) {
    return course.name === 'a'
})

console.log(found);
console.log(found2);