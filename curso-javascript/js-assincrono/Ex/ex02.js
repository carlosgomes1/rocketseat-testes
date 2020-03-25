function buscar() {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest()

        xhr.open('GET', `https://api.github.com/users/${ document.getElementById('name').value }/repos`)
        xhr.send(null)

        xhr.onreadystatechange = () => {
            if( xhr.readyState === 4 ) {
                if( xhr.status === 200 ) {
                    resolve(JSON.parse(xhr.responseText))
                } else {
                    reject('ERRO 404 - user not found')
                }
        }
    }
    })
}

function buscarAPI() {
    buscar()
    .then((response) => {
        listarRepositorios(response)
    })
    .catch((error) => {
        console.log(error)
    })
}

function listarRepositorios( user ) {
    let div = document.getElementById('repos')
    let ul = document.getElementById('ul')

    user.forEach(element => {
        let li = document.createElement('li')
        li.innerHTML = `${ element.name } -> <a href="https://github.com/${ element.owner.login }/${element.name}"> github.com/${ element.owner.login }/${element.name}</a>`
        ul.appendChild(li)
        div.appendChild(ul)
    }); 
}