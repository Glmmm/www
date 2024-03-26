const array_numeros = [1, 2, 3, 4]
const array_numeros1 = [12, 14, 26, 24, 30]

const verificar = function (array) {
    let newArray = []
    for (i in array) {
        if (i % 2 == 0 && array[i] % 2 == 0) {
            newArray.push(array[i])
        }
    }
    return newArray
}

function verificar1(array) {
    return array.filter((valor, indice) => {
        const valor_par = valor % 2 === 0
        const indice_par = indice % 2 === 0

        return valor_par && indice_par
    })
}

console.log(verificar(array_numeros))
console.log(verificar(array_numeros1))

console.log(verificar1(array_numeros))
console.log(verificar1(array_numeros1))
