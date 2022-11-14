// Usando a notação literal]
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)

const obj2 = new Object 
console.log(obj2)


// Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome 
    this.getPrecoComDesconto = () => {
        return (preco * (1 - desc)).toFixed(2)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Joao', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna Objeto...
const fromJSON = JSON.parse(`{
    "OriginDataLastChgUTCDateTime": "2022-11-11T14:38:09.4490001Z",
    "FullName": "Vitor da Silva Mota",
    "FirstName": "Vitor",
    "LastName": "Mota",
    "MaritalStatus": "1",
    "CityName": "São Paulo",
    "Language": "PT",
    "EmailAddress": "vitormota05@gmail.com",
    "MobileNumber": "+5511997159497",
    "YY1_CPF_MPS": "47556394840",
    "BirthDate": "1999-07-10T00:00:00",
    "GenderCode": "1"

}`)

console.log(fromJSON.GenderCode);
console.log(fromJSON.CityName);