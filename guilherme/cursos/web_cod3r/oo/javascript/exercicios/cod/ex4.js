// const mes = function(num){
    // switch(num){
        // case 1:
            // return `Janeiro`
        // case 2:
            // return `Fevereiro`
        // case 3:
            // return `Março`
        // case 4:
            // return `Abril`
        // case 5:
            // return `Maio`
        // case 6:
            // return `Junho`
        // case 7:
            // return `Julho`
        // case 8:
            // return `Agosto`
        // case 9:
            // return `Setembro`
        // case 10:
            // return `Outubro`
        // case 11:
            // return `Novembro`
        // case 12:
            // return `Dezembro`
    // }
// }

const mes_array = function(num1){
    const meses = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro']
    return meses[num1]
}

console.log(mes_array(0))
console.log(mes_array(2))
console.log(mes_array(5))
console.log(mes_array(3))
