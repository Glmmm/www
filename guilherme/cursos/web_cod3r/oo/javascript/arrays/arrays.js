/* arrays possuem indices de 0 até n (no caso de js), diferente de objetos e suas chaves*/

// console.log(typeof Array, typeof new Array, typeof [])
let aprovados = ['Bia', 'Carlos', 'Ana']
// console.log([0])
// console.log([1])
// console.log([2])
aprovados.push('Abia')
aprovados[9] = 'Rafael'
// console.log(aprovados.length)
// console.log(aprovados[8] === undefined)
// console.log(aprovados)
aprovados.sort()
// console.log(aprovados)
delete aprovados[1]
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'termo1', 'termo2')
/* (apartir da onde, quantos e o que vai substituir cada um*/
// console.log(aprovados)

const pilotos = ['vettel', 'alonso', 'raikonne', 'massa']
pilotos.pop() //retira o ultimo incice
// console.log(pilotos)
pilotos.push('verstappen') //adiciona no ultimo indice
// console.log(pilotos)
pilotos.shift() //remove o primeiro indice
// console.log(pilotos)
pilotos.unshift('hamilton') //adiciona no primeiro indice
// console.log(pilotos)

// splice adiciona e remove elementos
pilotos.splice(2, 0, 'bottas', 'massa')
// console.log(pilotos)
/*(apartir da onde, quantos e o que vai substituir cada um*/
pilotos.splice(3, 1)
// console.log(pilotos)

// ideia ludica pq existe funcoes especificas de arrays
const quase_array = {0: 'Rafael', 1:'Ana', 2:'Bia'}
console.log(quase_array)
Object.defineProperty(quase_array, 'toString',{
    value: function(){ return Object.values(this)},
    enumerable:false
})
console.log(quase_array[0])

const e_array = ['Rafael', 'Ana', 'Bia']
console.log(quase_array.toString(), e_array)
