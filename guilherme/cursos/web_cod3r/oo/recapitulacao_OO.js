const produto = new Object
produto.nome = "Carro"
produto.preco = 2999 
// console.log(produto)

const carro = {
    modelo: 'Jetta',
    placa: 'ABC-1234',
    proprietario: {
        nome: 'Jeane',
        idade: 50,

    },
    condutores: [{
        nome: 'Guilherme',
        idade: 19,
    }, {
        nome:'Mario',
        idade: 50,
    }],
    calc_val_seguro: function(){
        // qualquer dia eu faço isso
    }
}
// console.log(carro)
// console.log(carro.condutores.length)
// delete carro.condutores
// delete carro.calc_val_seguro
// console.log(carro)

// FUNCAO CONSTRUTORA
function produto1(nome,preco,desc){
    this.nome = nome
    this.val_desc = () =>{
        return preco * (1-desc)
    }
}

const p1 = new produto1('caneta',7,0.1)
const p2 = new produto1("notebook", 2999, .25)

// console.log(p1.val_desc(), p2.val_desc())

// FUNCAO FACTORY
function funcionario(nome, salario, faltas){
    return {
        nome,
        salario,
        faltas,
        calc_salario(){
            return (salario/30*(30-faltas))
        }
    }
}

const f1 = funcionario('Joao', 5000, 12)
const f2 = funcionario('Maria', 10000, 6)
// console.log(f1.calc_salario(), f2.calc_salario())

// OBJECT.CREATE
const filha = Object.create(null)
filha.nome = 'Ana'
// console.log(filha)

// RETORNA OBJETO
const fromJSON = JSON.parse('{"info": "i use debian btw"}')
// console.log(fromJSON.info)

// COMO EDITAMOS UM FODENDO CONST
// pessoa -> 123 -> {...}  
const pessoa = {nome: 'Carlos'}
pessoa.nome = 'Carlinho'
// console.log(pessoa)

// pessoa -> 456 -> {...} tentando fazer apontar pra outro endereço
// pessoa = {nome: 'Ana'}
Object.freeze(pessoa)
pessoa.nome = 'Maria'
// console.log(pessoa)

// CONSTANTE DE VERDADE
const constante = Object.freeze({nome: 'Maria'})
constante.nome = 'Carlos'
// console.log(constante)

// ALGUMAS PROPRIEDADES
// UMA FORMA DE ATRIBUIR VALOR AS CHAVES
const a = 1
const b = 2
const c = 3

const obj1 = {a, b ,c}
// console.log(obj1)

// UMA FORMA DE CRIAR CHAVE E VALOR A PARTIR DE "VARIAVEIS"
const nome_atrib = "nota"
const valor_atrib = 9
const obj2 = {}
obj2[nome_atrib] = valor_atrib
// console.log(obj2)

// GET E SET

const sequencia = {
    _valor: 1,
    get valor(){return this._valor++},
    set valor(valor){
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}
// console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 50
// console.log(sequencia.valor, sequencia.valor)

// FUNÇOES IMPORTANTES DE OBJETO

const pessoa1 = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13,
}
// console.log(Object.keys(pessoa1))
// console.log(Object.values(pessoa1))
// console.log(Object.entries(pessoa1))

Object.entries(pessoa1).forEach(([chave, valor]) => {
    // console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa1, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
// console.log(pessoa1.dataNascimento)
// console.log(Object.keys(pessoa1))

// Object.assign
const destino = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a:4}
// console.log(destino)
const obj = Object.assign(destino, o1, o2)
// console.log(obj, o1, o2) 


