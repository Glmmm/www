const count_letra = function (letra, texto) {
    let contagem = texto.split(letra).length
    if (contagem <= 1) {
        return `não tem letra ${letra}`
    }
    return `tem ${contagem - 1} letra(s) ${letra}`
}
function contarCaractere(caractereBuscado, frase) {
    return [...frase].filter(caractere => caractere === caractereBuscado).length //NAO TENDI UM CARALHO
}
console.log(count_letra('t', 'texto'))
console.log(count_letra('a', 'texto'))
console.log(count_letra('o', 'orangotango'))

console.log(contarCaractere('t', 'texto'))
console.log(contarCaractere('a', 'texto'))
console.log(contarCaractere('o', 'orangotango'))
