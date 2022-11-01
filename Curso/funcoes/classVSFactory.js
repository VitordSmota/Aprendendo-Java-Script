class Pessoa {
    constructor (nome) {
        this.name = nome;
    }
    falar() {
        console.log(`Meu nome é ${this.name}`)
    }
}

const p1 = new Pessoa('João')

p1.falar()

const pessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = pessoa('João')

p2.falar()