const alunos = [
    { nome: 'João', nota: 8.5, bolsista: true },
    { nome: 'Maria', nota: 6.7, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 5.4, bolsista: true },
]

// IMPERATIVO
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// DECLARATIVO
const nota1 = alunos => alunos.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(nota1).reduce(soma)
console.log(total2 / alunos.length)