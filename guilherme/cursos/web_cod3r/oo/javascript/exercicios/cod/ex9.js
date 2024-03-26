const concat = function (repete) {
    return '+'.repeat(repete)
}
function simboloMais(quantidade, texto) {
    let resultado = ''
    for (let i = 0; i < quantidade; i++)
        resultado += texto
    return resultado
}
console.log(concat(6))
console.log(concat(2))
console.log(concat(1))

console.log(simboloMais(5,'texto '))