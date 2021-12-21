const Router = require('express').Router();
const citiesControllers = require('../controllers/citiesControllers');
const itinerariesControllers = require('../controllers/itinerariesControllers');
const authControllers = require('../controllers/authControllers')
const validator = require('../config/validator')
const passport = require('../config/passport');
const activitiesControllers = require('../controllers/activitiesControllers');

const { getCities, getCity, addCity, deleteCity, modifyCity } = citiesControllers
const { itinerarioTodos, agregarItinerario, conseguirItinerario, borarItinerario, modificarItinerario, conseguirItinerarioDeUnaCiudad, editComment, likesItinerary } = itinerariesControllers
const { addNewUser, signUser, tokenVerification } = authControllers
const { addActivity, getActivity } = activitiesControllers

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

Router.route('/auth/signIn/token')
.post(passport.authenticate("jwt",{session:false}),tokenVerification)
// middlewear--->si el token es autentico llega al controller "tokenVerification", sino corta. 

Router.route('/activities')
.post(addActivity)

Router.route('/activities/:itineraryId')
.get(getActivity)

Router.route("/comments/:id")
.put(passport.authenticate("jwt", {session: false}),editComment)

Router.route("/itinerary/like/:id")
.put(passport.authenticate("jwt", {session: false}),likesItinerary)


module.exports = Router
