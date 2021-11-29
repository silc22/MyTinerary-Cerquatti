const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
    usuarioNombre: { type: String, required: true },
    usuarioFoto: { type: String, required: true },
    price: { type: String, required: true },
    duracion: { type: String, requires: true }
})


const Itineraries = mongoose.model('itinerairy', itinerarySchema)

module.exports = Itineraries;