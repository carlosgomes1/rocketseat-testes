class List {
    constructor() {
        this.data = []
    }

    add( data ) {
        this.data.push(data)
        console.log(this.data)
    }
}

class TodoList extends List {
    constructor() {
        super()

        this.user = 'Caco'
    }
    
    mostrarUsuario() {
        console.log(this.user)
    }
}

const minhaLista = new TodoList()

document.getElementById('novoTodo').onclick = () => {
    minhaLista.add('Novo todo')
}

minhaLista.mostrarUsuario()
console.log(minhaLista.data)

class Matematica {
    static somar( a, b ) {
        return a + b
    }
}

console.log(Matematica.somar(1, 5))