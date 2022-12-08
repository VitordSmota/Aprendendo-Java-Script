const url = 'http://files.cod3r.com.br/curso-js/funcionario.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)
})