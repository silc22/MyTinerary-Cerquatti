const Router = require('express').Router();
const citiesControllers = require('../controllers/citiesControllers')

const { allCities, city, cargarcity } = citiesControllers

Router.route('/cities')
.get(allCities)
// .post(cargarcity)


// Router.route('/api/cities/:id')
// .get(city)


module.exports = Router;
