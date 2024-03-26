const alunos = [
    {nome: 'João', nota: 8.5, bolsista: true} ,
    {nome: 'Maria', nota: 6.7, bolsista: true} ,
    {nome: 'Pedro', nota: 9.8, bolsista: false}, 
    {nome: 'Ana', nota: 5.4, bolsista: true},
]


const bolsa = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(analise => analise.bolsista).reduce(bolsa))

const algum_bolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(analise => analise.bolsista).reduce(algum_bolsista))