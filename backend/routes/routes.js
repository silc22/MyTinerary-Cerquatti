const Router = require('express').Router();
const citiesControllers = require('../controllers/citiesControllers');
const itinerariesControllers = require('../controllers/itinerariesControllers');
const authControllers = require('../controllers/authControllers')
const validator = require('../config/validator')
const passport = require('../config/passport')

const { getCities, getCity, addCity, deleteCity, modifyCity } = citiesControllers
const { itinerarioTodos, agregarItinerario, conseguirItinerario, borarItinerario, modificarItinerario, conseguirItinerarioDeUnaCiudad } = itinerariesControllers
const { addNewUser, signUser } = authControllers

Router.route('/cities')
.get(getCities)
.post(addCity)


Router.route('/city/:id')
.get(getCity)
.delete(deleteCity)
.put(modifyCity)


Router.route('/itineraries')
.get(itinerarioTodos)
.post(agregarItinerario)

Router.route('/itineraries/:id')
.get(conseguirItinerario)
.delete(borarItinerario)
.put(modificarItinerario)

Router.route('/itinerary/:idCity')
.get(conseguirItinerarioDeUnaCiudad)

Router.route('/auth/signUp')
.post(validator, addNewUser)

Router.route('/auth/signIn')
.post(signUser)


module.exports = Router
