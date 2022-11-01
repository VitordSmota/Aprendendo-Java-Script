function Pessoa(nome) {
    this.name = nome;
  
  this.falar= function() {
    console.log(`Meu nome é ${this.name}`);
  }
}

const p1 = new Pessoa("João");

p1.falar();
