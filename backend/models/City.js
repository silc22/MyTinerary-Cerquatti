const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    pais: { type: String, required: true },
    src: { type: String, required: true },
})

const City = mongoose.model('city', citySchema)

module.exports = City;
