const escola = [{
    nome: 'Turma M1',
    alunos: [{ nome: 'Gustavo', nota: 9.1 }, { nome: 'Ana', nota: 9.3 }]
}, {
    nome: 'Turma M2',
    alunos: [{ nome: 'Rebeca', nota: 5.6 }, { nome: 'Roberto', nota: 7.8 }]
}]

const nota_aluno = alunos => alunos.nota
const nota_turma = turma => turma.alunos.map(nota_aluno)
const notas = escola.map(nota_turma)
console.log(notas)

Array.prototype.flat_map = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flat_map(nota_turma)
console.log(notas2)