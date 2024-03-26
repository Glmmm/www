Array.prototype.forEach2 = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}
/*
for (let i in aprovados) {
    let indice1 = aprovados[i]
    console.log(i, indice1)
    i++
}*/

const aprovados = ['Agatha', 'Ado', 'Daniel', 'Raquel']
aprovados.forEach2(function (nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})