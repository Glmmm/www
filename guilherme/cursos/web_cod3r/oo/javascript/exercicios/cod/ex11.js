const object1 = {id: 20, nome: 'caneta', descricao: 'O que'}
const object2 = {cod: 230, produto: 'mouse', info: 'G Pro'}

const modificar = function(objeto, atributo){
    const newObject = Object.assign({}, objeto) 
    delete newObject[atributo]
    return newObject
}
console.log(modificar(object1, 'id'))
console.log(modificar(object1, 'nome'))
console.log(modificar(object2, 'cod'))
console.log(object1)
console.log(object2)