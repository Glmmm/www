const aprovados = ['Agatha', 'Ado', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))
const exibir_aprovados = aprovado => console.log(aprovado, )
aprovados.forEach(exibir_aprovados)

