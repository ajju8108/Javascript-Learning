/* const numbers = [1, 3, 2, 8, 5, 5]
// numbers.sort()
// numbers.reverse()
console.log(numbers); */


// for objects
const courses = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'javaScript' }
]
courses.sort(function (a, b) {
    const name1 = a.name.toUpperCase
    const name2 = b.name.toUpperCase
    if (name1 < name2) return -1;
    if (name1 > name2) return 1;
    return 0

})
console.log(courses);