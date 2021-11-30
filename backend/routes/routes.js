const Router = require('express').Router();
const citiesControllers = require('../controllers/citiesControllers');
const itinerariesControllers = require('../controllers/itinerariesControllers');


const { getCities, getCity, addCity, deleteCity, modifyCity } = citiesControllers
const { itinerarioTodos, agregarItinerario, conseguirItinerario, borarItinerario, modificarItinerario } = itinerariesControllers

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

Router.route('/itinerary/:id')
.get(conseguirItinerario)
.delete(borarItinerario)
.put(modificarItinerario)

module.exports = Router
