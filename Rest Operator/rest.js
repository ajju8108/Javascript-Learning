function sum(discount, ...price) {
    const total = price.reduce((a, b) => a + b);
    return total * (1 - discount)
}
console.log(sum(0.1, 20, 30));