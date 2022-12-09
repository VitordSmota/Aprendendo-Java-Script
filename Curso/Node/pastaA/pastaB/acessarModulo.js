const moduloA = require("../../ModuloA");
console.log(moduloA.ola);

const saudacao = require("saudacao");
console.log(saudacao.ola);

const c = require('./pastaC/index')
console.log(c.ola2)

const http = require("http");
http.createServer((req, res) => {
    res.write("Boom diaa!");
    res.end();
  }).listen(8080);
