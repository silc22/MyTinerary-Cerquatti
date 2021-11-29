const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    pais: { type: String, required: true },
    src: { type: String, required: true },
})

const itinerarySchema = new mongoose.Schema({
    usuarioNombre: { type: String, required: true },
    usuarioFoto: { type: String, required: true },
    price: { type: String, required: true },
    duracion: { type: String, requires: true }
})


const City = mongoose.model('city', citySchema)
const Iteraries = mongoose.model('itineraires', itinerarySchema)

module.exports = City;
module.exports = Iteraries;