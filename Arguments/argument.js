function sum() {
    add = 0
    for (let values of arguments) {
        add += values
    }
    return add
}
console.log(sum(1, 2, 3, 4, 5, 10));