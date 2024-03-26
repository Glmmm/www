// JSON = js object notation, saporra NÂO É UM OBJETO
// Object = saporra É um OBJETO

const obj = {a:1, b:2, c:3}

console.log(JSON.stringify(obj))

// JSON é estrito, "" somente para atributos '' pra porra toda? aceita arrays e objetos, nao aceita funções
// console.log(JSON.parse("{a:1, b:2, c:3}"))
// console.log(JSON.parse("{'a':1, 'b':2, 'c':3}"))
console.log(JSON.parse('{"a":1, "b":2, "c":3}'))