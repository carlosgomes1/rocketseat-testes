const array = [1, 2, 3, 6, 7, 12]

const newArray = array.map( ( item, index ) => item + index )

console.log(newArray)

const soma = array.reduce( ( total, next ) => total + next )

console.log(soma)

const filter = array.filter( item => item % 2 === 0 )

console.log(filter)

const find = array.find( item => item === 6 )

console.log(find)