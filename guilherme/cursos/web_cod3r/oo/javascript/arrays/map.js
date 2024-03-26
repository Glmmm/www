// let resultado1 = resultado.map(function(i){
//     return i * 20
// })
// console.log(resultado1)

const nums = [1,2,3,4,5]

// For com proposito = map
let resultado = nums.map(function(e){
    return e * 2
})

// console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e*3
const denero = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(denero)
// console.log(resultado)


const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }', 
    '{ "nome": "Caderno", "preco": 13.90 }', 
    '{ "nome": "Kit lapis", "preco": 41.22 }', 
    '{ "nome": "Caneta", "preco": 7.50 }'
]

const obj = json => JSON.parse(json)
const preco = produto => produto.preco

const resultado1 = carrinho.map(obj).map(preco)
// console.log(resultado1)
