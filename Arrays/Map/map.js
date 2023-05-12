const numbers = [2, 3, 4, 5]
// const mapValue = numbers.map((values) => { return `<li> ${values * 2}  </li> ` })
const mapValue = numbers.map((values) => {
    return { value: values }
})
console.log(mapValue);