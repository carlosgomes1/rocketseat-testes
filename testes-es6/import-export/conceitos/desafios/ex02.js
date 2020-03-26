const users = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },

]

// map

const arrayMap = users.map( item => item.idade )

console.log(arrayMap)

// filter

const arrayFilter = users.filter( item => item.empresa === 'Rocketseat' && item.idade >= 18 )

console.log(arrayFilter)

// find

const arrayFind = users.find( item => item.empresa === 'Google' )

console.log(arrayFind)

// misturando

const arrayMist = users.filter( item => {
    item.idade *= 2
    return item.idade <= 50
})

console.log(arrayMist)