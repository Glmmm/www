class lancamento {
    constructor(nome = 'Generico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}
class ciclo_financeiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    add_lancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }
    sumario() {
        let valor_consolidado = 0
        this.lancamentos.forEach(l => {
            valor_consolidado += l.valor
        })
        return valor_consolidado
    }
}

const salario = new lancamento('salario', 45000)
const conta_luz = new lancamento('Luz', -220)

const contas = new ciclo_financeiro(6, 2018)
contas.add_lancamentos(salario, conta_luz)
// console.log(contas.sumario())

class avo{
    constructor(sobrenome, profissao ="Gerente"){
        this.sobrenome = sobrenome
        this.profissao = profissao 
    }
}
class pai extends avo{
    constructor(sobrenome, profissao = "Professor"){
        super(sobrenome)
        this.profissao = profissao
    }
}
class filho extends pai{
    constructor(){
        super("Silva")
    }
}

const avo_obj = new avo
const pai_obj = new pai
const filho_obj = new filho
console.log(filho_obj)
console.log(avo_obj)
console.log(pai_obj)