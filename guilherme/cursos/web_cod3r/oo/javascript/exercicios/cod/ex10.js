const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
const array1 = [7, 14, 'arroz', 'ola']
const array2 = [-100, 20, 'tchau']

const first_last = function (array) {
    let newArray = []
    newArray.push(array.shift())
    newArray.push(array.pop())
    return newArray

}

console.log(first_last(array1))
console.log(first_last(array2))
console.log(first_last(pilotos))