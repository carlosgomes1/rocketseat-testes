class User {
    constructor( email, senha ) {
        this.email = email
        this.senha = senha
        this.admin = false
    }

    isAdmin() {
        if( this.admin === false ) {
            console.log('Não é ADMIN')
        } else {
            console.log('É ADMIN')
        }   
    }
}

class Admin extends User {
    constructor(email, senha) {
        super(email, senha)
        this.admin = true
    }
}

const adm = new Admin('carlosgs.dev@gmail.com', 'cacofoda')
const user = new User('carlos_gomes.s@hotmail.com', 'ehocacomane')

console.log(adm)
console.log(user)

adm.isAdmin()
user.isAdmin()