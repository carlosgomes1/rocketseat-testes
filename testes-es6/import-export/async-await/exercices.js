import axios from 'axios'

async function getUserFromGithub( user ) {

    try {
        const response = await axios.get(`https://api.github.com/users/${ user }`)

        console.log(response.data)
    } catch (error) {
        console.warn('NAO ENCONTRAMOS')
    }
}

getUserFromGithub('carlosgomes1')

class Github {
    static async getRepositories( repo ) {
        try{
            const response = await axios.get(`https://api.github.com/repos/${ repo }`)

            console.log(response)
        } catch(error) {
            console.warn('REPOSITÓRIO NÃO EXISTE')
        }
    }
}

Github.getRepositories('carlosgomes1/accio')
Github.getRepositories('carlosgomes1/accioaaaaaaa')