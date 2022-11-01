console.log(soma(3, 4))// ocorre tudo bem, primeiro carrega as funções e depois os códigos, por isso, não da erro.
console.log(sub(3,4)) // function expression, funcionar somente dps da function expression for declarada.

// function declaration

function soma(x, y) {
    return x + y
}

// function expression

const sub = function (x, y) {
    return x - y
}

// Named function expression

const mult = function mult(x, y) {
    return x * y
    //pouco usada, benefício na debugger
}
