// rest

const user = {
    nome: 'Caco',
    idade: 20,
    empresa: 'qp'
}

const { nome, ...resto } = user

console.log(nome)
console.log(resto)

const arr = [1, 2, 3, 4, 5]

const [ a, b, ...c ] = arr

console.log(a, b, c)

function soma( ...params ) {
    return params.reduce((total, next) => total + next)
}

console.log(soma(1, 3, 8, 12))

// spread

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const arr3 = [...arr1, ...arr2]

const user11 = {
    nome: 'Caco',
    idade: 20,
    empresa: 'qp'
}

const user2 = { ...user11, nome: 'Henry' }

console.log(user2)

