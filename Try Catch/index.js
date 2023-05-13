const person = {
    firstName: 'mosh',
    lastname: 'hamedani',
    get fullName() {
        return `${person.firstName} ${person.lastname}`
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastname = parts[1];
    }
}

// getters => access properties
// setters => change(mutate) them
person.fullName = 'John Smith'
console.log(person);