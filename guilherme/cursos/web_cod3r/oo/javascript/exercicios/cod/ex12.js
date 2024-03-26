let aprovados = ['Bia', 'Carlos', 'Ana']
let array_numeros = [4, 2, 1, 12, 'nao pode']

const numeros = function (array) {
    let newArray = []
    for (i in array) {
        if (typeof array[i] === 'number') { // array[i] >= 0 foi uma coisa
            newArray.push(array[i])
        }
    }
    return newArray
}

function numeros1(array) {
    return array.filter(item => typeof item === 'number')
}

console.log(numeros(aprovados))
console.log(numeros(array_numeros))

console.log(numeros1(aprovados))
console.log(numeros1(array_numeros))