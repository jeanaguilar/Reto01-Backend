//miserver.js
var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');

var generarUsuario = function(){
  var randomRandom = faker.random.uuid();
  var randomAddress = faker.address.streetAddress();
  var randomName = faker.name.findName();
  var randomCompany = faker.company.companyName();
  var randomLorem = faker.lorem.sentence();
  var randomDate = faker.date.future();
  var randomImage = faker.image.people();
  return {
  	id: randomRandom,
  	Direccion: randomAddress,
  	nombre: randomName,
  	contenido: randomLorem,
  	fecha: randomDate,
  	Compania: randomCompany,
  	imagen: randomImage
  }

}

app.get('/', function (req,res) {
  res.send('Mi primer servidor!');
})


app.get('/posts', function (req, res) {
  var cantidad = _.random(5,10)
  var usuarios = _.times(cantidad, generarUsuario)
  res.json(usuarios);
})


app.get('/amigos', function (req, res) {
  res.send('Mis amigos');
})


app.listen(3000);