/*
        REQUISIÇÃO AJAX
var xhr = new XMLHttpRequest()

xhr.open('GET', 'https://api.github.com/users/carlosgomes1')
xhr.send(null)


xhr.onreadystatechange = () => {
    if ( xhr.readyState === 4 ) {
        console.log(JSON.parse(xhr.responseText))
    }
} */


/*
        UTILIZAÇÃO DE PROMISES

var myPromise = () => {
    return new Promise( (resolve, reject) => {
        var xhr = new XMLHttpRequest()
        xhr.open('GET', 'https://api.github.com/users/carlosgomes1')
        xhr.send(null)

        xhr.onreadystatechange = () => {
            if ( xhr.readyState === 4 ) {
                if( xhr.status === 200 ) {
                    resolve(JSON.parse(xhr.responseText))
                } else {
                    reject('Erro na requisição')
                }
            }
        }
    })
}

myPromise()
    .then( (response) => {
        console.log(response)
    })
    .catch( (error) => {
        console.warn(error)
    }) */

axios.get('https://api.github.com/users/carlosgomes1')
    .then( (response) => {
        console.log(response.data.login)
    })
    .catch( (error) => {
        console.warn(error)
    })