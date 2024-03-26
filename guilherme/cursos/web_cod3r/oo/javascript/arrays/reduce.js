const alunos = [
    { nome: 'João', nota: 8.5, bolsista: true },
    { nome: 'Maria', nota: 6.7, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 5.4, bolsista: true },
]

const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)