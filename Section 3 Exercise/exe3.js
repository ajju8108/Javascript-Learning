// Exercise 1
// Create address object with 3 props street, city, zipCode & function showAddress that take object as arguement and show its value
/* const address = {
    street: 'a',
    city: 'c',
    zipcode: 1
}
function showAddress(address) {
    for (let key in address) {
        console.log(key, address[key]);
    }
}
showAddress(address); */



// Exercise 2
//Create Factory & Constructor Function Difference from above example
/* const address = {
    street: 'a',
    city: 'c',
    zipcode: 1
} */

// Factory function
/* function showAddress(street, city, zipcode) {
    return {
        street,
        city,
        zipcode
    }
}
console.log(showAddress('aaa', 'virar', 10101));


function ShowAddress(street, city, zipcode) { // Constructer Function
    this.street = street,
        this.city = city,
        this.zipcode = zipcode
}
const ad = new ShowAddress('aaa', 'virar', 10101)
console.log(ad); */



// Exercise 3
//Compare 2 objects using Constructor Function
/* function Address(street, city, zipCode) {
    this.street = street,
        this.city = city,
        this.zipCode = zipCode
}
const address1 = new Address('s', 'c', 1)
const address2 = new Address('s', 'c', 1)

function areEqual(address1, address2) {
    return address1.street === address2.street && address1.city === address2.city && address1.zipCode === address2.zipCode
}

function areSame(address1, address2) {
    return address1 === address2
}
console.log(areEqual(address1, address2));
console.log(areSame(address1, address2)); */



// Exercise 4
//Create an object with title, body, author, views, comments, under comments we have author, body, and last is live

/* let post = {
    title: 'a',
    body: 'b',
    author: 'ajay',
    views: 3,
    comments: [
        { author: 'random1', body: 'nice1' },
        { author: 'random2', body: 'nice2' },
    ],
    isLive: true
}
console.log(post); */



// Exercise 5
//Create a price range object

// let post = {
//     title: 'a',
//     body: 'b',
//     author: 'ajay',
//     views: 3,
//     comments: [
//         { author: 'random1', body: 'nice1' },
//         { author: 'random2', body: 'nice2' },
//     ],
//     isLive: true
// }
// const newPost = new Post('c', 'bodyyyy', 'authorrrr')
// console.log(newPost);
// function Post(title, body, author) {
//     this.title = title;
//     this.body = body;
//     this.author = author;
//     this.views = 0;
//     this.comments = [];
//     this.isLive = false

// }



// Exercise 6
//Create a price range object
let priceRange = [
    { label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10 },
    { label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20 },
    { label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 30 },
]
let restaurant = [
    { avergaePerPerson: 5 }
]