const Router = require('express').Router();
const citiesControllers = require('../controllers/citiesControllers')

const { allCities, cityIndivdual, cargarcity } = citiesControllers

Router.route('/cities')
.get(allCities)
.post(cargarcity)


Router.route('/city/:id')
.get(cityIndivdual)


module.exports = Router
