const Router = require('express').Router();
const citiesControllers = require('../controllers/citiesControllers')

const { getCities, getCity, addCity, deleteCity, modifyCity } = citiesControllers

Router.route('/cities')
.get(getCities)
.post(addCity)



Router.route('/city/:id')
.get(getCity)
.delete(deleteCity)
.put(modifyCity)

module.exports = Router
