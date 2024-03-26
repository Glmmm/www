const produtos = [
    { nome: 'jornal', categoria: 'informacao', preco: 29 },
    { nome: 'cinema', categoria: 'lazer', preco: 150 },
]

const produtos1 = [
    { nome: 'jornal', categoria: 'informacao', preco: 300 },
    { nome: 'cinema', categoria: 'lazer', preco: 700 },
]

const despesas = function (array) {
    let soma = 0
    for (i in array) {
        soma += array[i].preco
    }
    return soma
}
console.log(despesas(produtos))
console.log(despesas(produtos1))
