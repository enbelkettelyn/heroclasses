class heroi{
    constructor(nome, idade, tipo, ataque){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = ataque
    }

    atacar(){
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
    }
}

let mago = new heroi("gato de botas", "100", "mago", "magia")
let guerreiro = new heroi("shrekzandi", "70", "guerreiro", "espada")
let monge = new heroi("yuseff", "190", "monge", "artes marcias")
let ninja = new heroi("espadafu", "85", "ninja", "shuriken")

mago.atacar()
guerreiro.atacar()
monge.atacar()
ninja.atacar()