const object1 = {id: 20, nome: 'caneta', descricao: 'O que'}
const object2 = {cod: 230, produto: 'mouse', info: 'G Pro'}

const to_array = function(objeto){
    let array = []
    array.push(Object.entries(objeto))
    return array
}

console.log(to_array(object1))