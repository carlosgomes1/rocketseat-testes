const arr = [1, 2, 3, 4, 5]

console.log(arr.map(function(item) {
    return item + 10
}))


console.log(arr.map( item => item + 10 ))

/* ----------------------------------------------------------- */

const usuario = { nome: 'Diego', idade: 23 }

function mostraIdade( user ) {
    return usuario.idade
}

const mostrarIdade = user => usuario.idade

mostrarIdade(usuario)

/* ------------------------------------------------------------- */

const nome = 'Diego'
const idade = 23

function mostraUsuario( nome = 'Caco', idade = 18 ) {
    return { nome, idade }
}

console.log(mostraUsuario(nome, idade))

const mostrarUsuario = (nome = 'Caco', idade = 18) => ({ nome, idade })

console.log(mostrarUsuario(nome, idade))

/* ------------------------------------------------------------- */

const promise = function() {
    return new Promise(function(resolve, reject) {
        return resolve()
    })
}

const promise2 = () => newPromise( (resolve, reject) => resolve() )