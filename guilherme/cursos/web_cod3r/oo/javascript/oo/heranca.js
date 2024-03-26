// console.log(ferrari.__proto__)
// console.log(ferrari.__proto__ === Object.prototype)
// console.log(volvo.__proto__ === Object.prototype) //
// console.log(Object.prototype.__proto_) //nao existe um objeto acima nesse caso

function meu_objeto() {
    // console.log(typeof Object, typeof meu_objeto)
    // console.log(Object.prototype, meu_objeto.prototype)
}

const carro = {
    vel_atual: 0,
    vel_max: 200,
    acelerar(delta) {
        if (this.vel_atual + delta <= this.vel_max) {
            this.vel_atual += delta
        } else {
            this.vel_atual = this.vel_max
        }
    },
    status() {
        return `${this.vel_atual}Km/h de ${this.vel_max}Km/h`
    }
}
const ferrari = {
    modelo: 'f40',
    vel_max: 324,
}

const volvo = {
    modelo: 'v40',
    vel_max: 200,
    status() {
        return `${this.modelo} ${super.status()}`
    }
}


Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)
// console.log(volvo)
volvo.acelerar(100)
// console.log(volvo)

// console.log(typeof String)
// console.log(typeof Array)
// console.log(typeof Object)
String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}
// console.log('Guilherme'.reverse())

Array.prototype.first = function () {
    return this[0]
}

// console.log([1,2,3,4,5].first())
// console.log(['a','b','c','d'].first())

function aula(nome, video_id) {
    this.nome = nome
    this.video_id = video_id
}

const aula1 = new aula('Bem-vindo', 123)
const aula2 = new aula('Até breve', 456)

function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

