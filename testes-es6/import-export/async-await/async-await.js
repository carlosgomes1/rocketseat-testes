const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 2000)
})

async function executaPromise() {
    const response = await minhaPromise()

    console.log(response)
}

executaPromise()

const executarPromise = async () => {
    const response = await minhaPromise()

    console.log(response)
}

executarPromise()