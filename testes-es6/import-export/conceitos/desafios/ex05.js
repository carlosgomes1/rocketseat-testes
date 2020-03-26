const arr = [1, 2, 3, 4, 5, 6]

const [ x, ...y ] = arr
console.log(x)
console.log(y)

const somar = (...params) => params.reduce((now, next) => now + next)

console.log(somar(3, 5, 1, 4, 7))

const user = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil'
    }
}

const user2 = { ...user, nome: 'Gabriel' }

console.log(user2)

const user3 = { ...user, endereco: { cidade: 'Lontras' }  }

console.log(user3)