// var cpf = require('validar-cpf');
// const buscadorcep = require('buscadorcep');
// const axios = require('axios');

import cpf from 'validar-cpf';
import buscadorcep from 'buscadorcep';
import  Axios  from 'axios';


// console.log(cpf('04822983404'));
// buscadorcep('51030300').then(response => console.log(response))
var cep = '55641494';
Axios.get(`https://viacep.com.br/ws/${cep}/json/`).then(function (response) {
    console.log(response.data);
})
