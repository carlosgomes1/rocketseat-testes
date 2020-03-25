function checarIdade(idade) {
    return new Promise((resolve, reject) => {
        
        if( idade >= 18 ) {
            resolve('Maior de 18')
        } else {
            reject('Menor de 18')
        }

    })
}
checarIdade(18)
    .then( (response) => {
        console.log(response)
    })
    .catch( (error) => {
        console.log(error)
    })