const numeros = [1, 4, 5, 2]
const numeros1 = [1, 2, 3, 4]

const soma = function (array) {
    let resultado = 0
    for (i in array) {
        resultado += array[i]
    }
    return resultado
}
console.log(soma(numeros))
console.log(soma(numeros1))

