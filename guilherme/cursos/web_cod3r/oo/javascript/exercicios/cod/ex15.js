const ano_bissexto = function (ano) {
    if ((ano % 4 == 0 || ano % 400) && ano % 100) {
        return true
    }
    return false
}
function ano_bissexto1(ano) {
    return new Date(ano, 1, 29).getDate() === 29
}

console.log(ano_bissexto(2020))
console.log(ano_bissexto(2100))
console.log(ano_bissexto(1812))

console.log(ano_bissexto1(2020))
console.log(ano_bissexto1(2100))
console.log(ano_bissexto1(1812))
