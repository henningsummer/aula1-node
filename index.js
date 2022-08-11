var cpf = require('validar-cpf');
const buscadorcep = require('buscadorcep');
const axios = require('axios');

// console.log(cpf('04822983404'));
// buscadorcep('51030300').then(response => console.log(response))

axios.get('https://viacep.com.br/ws/51030300/json/').then(function (response) {
    console.log(response.data);
})
