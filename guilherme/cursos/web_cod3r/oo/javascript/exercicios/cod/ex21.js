const sorteio = function (max, min, num) {
    let sorteado = Math.random() * (max - min) + min
    sorteado = sorteado.toFixed(0)
    if (num == sorteado) {
        return `nós andamos iguais ${sorteado}`
    }
    return `nós não andamos iguais ${sorteado}`
}

console.log(sorteio(4, 2, 2))
console.log(sorteio(1, 1, 1))
console.log(sorteio(2, 1, 1))