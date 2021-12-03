const Itineraries = require('../models/Itinerary')


const itinerariesControllers = {

    itinerarioTodos: async(req,res)=>{
        let itinerarios
        let error = null
        try{
            itinerarios = await Itineraries.find().populate('city')
            
        }catch(error){
            error = error
            console.error(error)
        }  

        res.json({
            respuesta: error ? 'ERROR' : itinerarios, 
            success: error ? false : true,
            error: error
        })
    },

    agregarItinerario: (req, res) => {
        const {itinerarioNombre, usuarioNombre, usuarioFoto, price, duracion, hashtags, likes, comments} = req.body
        new Itineraries({itinerarioNombre, usuarioNombre, usuarioFoto, price, duracion, hashtags, likes, comments}).save()
        .then((response) => res.json({response}))
    },

    conseguirItinerario: async(req,res)=>{  
        let itinerarios
        const id = req.params.id        
        try{
            itinerarios = await Itineraries.findOne({_id:id}).populate('city')
        }catch(error){
            console.log(error)
        }
        res.json({respuesta: itinerarios, success:true})
    },

    borarItinerario: async(req,res)=>{
        let city
        const id = req.params.id
        try {
            city = await Itineraries.findOneAndDelete({ _id: id })
        } catch(error) {
            console.log(error)
        }
        res.json({response: city})
    },


    modificarItinerario: async(req,res)=>{
        let id = req.params.id
        let itinerarios = req.body
        let actualizado
        try{
            actualizado = await Itineraries.findOneAndUpdate({ _id : id }, itinerarios, { new : true })
        }catch(error){
            console.log(error)
        }
        res.json({success : actualizado ? true : false})
    },

    conseguirItinerarioDeUnaCiudad: async(req,res)=>{
        try{
            const itinerarioDeCiudad = await Itineraries.find({city: req.params.idCity})
            res.json({response: itinerarioDeCiudad})
        }catch(error){
            console.log(error)
        }
    }

}

module.exports = itinerariesControllers;