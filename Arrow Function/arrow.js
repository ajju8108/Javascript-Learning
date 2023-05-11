const course = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' }
];
const found = course.find(course => {
    return course.name === 'a'
})

const found2 = course.findIndex(course => course.name === 'a'
)

console.log(found);
console.log(found2);