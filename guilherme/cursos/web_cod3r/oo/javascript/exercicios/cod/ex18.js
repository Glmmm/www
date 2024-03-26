const numeros = [1, 2, 3, 5, 600]
const numeros1 = [20, 20, 20, 20]

const despesas = function (array) {
    let soma = 0
    for (i in array) {
        soma += array[i]
    }
    return soma / array.length
}

const despesas1 = function (array) {
    let soma = 0
    for (i = 0; i < array.length; i++) {
        soma += array[i]
    }
    return soma / i
}

console.log(despesas(numeros).toFixed(2).replace('.', ','))
console.log(despesas(numeros1).toFixed(2).replace('.', ','))

console.log(despesas1(numeros).toFixed(2).replace('.', ','))
console.log(despesas1(numeros1).toFixed(2).replace('.', ','))
