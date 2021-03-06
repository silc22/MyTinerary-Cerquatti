const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
    city: [{ type: mongoose.Types.ObjectId, ref: 'city', required: true}],
    itinerarioNombre: {type: String, required: true },
    usuarioNombre: { type: String, required: true },
    usuarioFoto: { type: String, required: true },
    price: { type: Number, required: true },
    duracion: { type: Number, requires: true },
    likes: {type: Array},
    hashtags: {type: Array, required: true},
    comments: [{
        userId: {type: mongoose.Types.ObjectId, ref: 'user'},
        userImg: {type: String},
        userName: {type: String},
        comment: {type: String}        
     }],
})


const Itineraries = mongoose.model('itinerary', itinerarySchema)

module.exports = Itineraries;