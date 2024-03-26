const numeros = [1, 3, 5, -1]
const numeros1 = [20, 40, 10, 2, 1, 15, 16]

const menor_num = function (array) {
    const newArray = array
    newArray.sort()
    return newArray[0]
}

console.log(menor_num(numeros))
console.log(menor_num(numeros1))