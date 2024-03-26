const src_puro = function (inicio, palavras) {
    const resultado = []
    for (let palavra of palavras)
        if (palavra.includes(inicio))
            resultado.push(palavra)
    return resultado
}

const src = function (inicio, palavras) {
    return palavras.filter(palavra => palavra.includes(inicio))
}
console.log(src('pa', ['programacao', 'professor', 'protecao', 'proparoxitona', 'pra']))
console.log(src_puro('pro', ['programacao', 'professor', 'prato', 'proparoxitona']))
