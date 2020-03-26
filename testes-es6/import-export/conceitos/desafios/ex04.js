const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC'
    }
}

const { nome, endereco: { cidade, estado } } = empresa

console.log(nome)
console.log(cidade)
console.log(estado)

function mostraInfo( user ) {
    return `${user.nome} tem ${user.idade} anos.`
}

console.log(mostraInfo({ nome: 'Diego', idade: 23 }))

const user = {
    nome: 'Diego',
    idade: 23
}

function mostrarInfo( {nome, idade} ) {
    return `${nome} tem ${idade} anos.`
}

console.log(mostrarInfo(user))