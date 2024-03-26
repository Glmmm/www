const produtos = [  
    {nome: 'celular', preco: 2499, fragil: true},
    {nome: 'geladeira', preco: 4199, fragil: true},
    {nome: 'copo', preco: 12.49, fragil: true},
    {nome: 'copo de vidro', preco: 18.99, fragil: false},   
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))