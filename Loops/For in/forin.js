const person = {
    name: 'Mosh',
    age: 30
}
for (let key in person) {
    console.log(key, person[key], /* person.key */); // Here we cannot use person.key
}

const color = ['red', 'green', 'blue'];
for (let index in color) {
    console.log(index, color[index]);
}