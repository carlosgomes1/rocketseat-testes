class App {
    constructor() {
        this.repositories = []

        this.formEl = document.getElementById('repo-form')

        this.registerHandlers()
    }

    registerHandlers() {
        this.formEl.onsubmit = function(event) {
            addRepository(event)
        }
    }

    addRepository(event) {
        event.preventDefault()

        this.repositories.push({
            name: 'accio',
            description: 'Empresa fictícia',
            avatar_url: 'https://avatars2.githubusercontent.com/u/48812516?v=4',
            html_url: 'https://github.com/carlosgomes1/accio',
        })

        console.log(this.repositories)
    }
}