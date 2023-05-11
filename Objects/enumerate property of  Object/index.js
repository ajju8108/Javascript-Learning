const circle = {
    radius: 1,
    draw: function () {
        console.log('draw');
    }
}

//best way to iterate when working with obj
for (let key in circle) {
    // console.log(key, circle[key]);
}


//other way to iterate through the key present in obj
for (let key of Object.keys(circle)) {
    // console.log(key);
}


//another way to iterate through the entries present in obj
for (let entries of Object.entries(circle)) {
    console.log(entries);
}


//checking for the keys availabe in an object
if ('radius' in circle) {
    console.log('yes');
}