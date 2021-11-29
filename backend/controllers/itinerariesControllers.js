const Iteraries = require('../models/Iteneraries')


const itinerariesControllers = {

    getCities: async(req,res)=>{
        let itinerarios
        let error = null
        try{
            itinerarios = await Iteraries.find()
            
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

    addCity: (req, res) => {
        const {usuarioNombre, usuarioFoto, price, duracion} = req.body
        new City({usuarioNombre, usuarioFoto, price, duracion}).save()
        .then((response) => res.json({response}))
    },

    getCity: async(req,res)=>{  
        let itinerarios
        const id = req.params.id        
        try{
            itinerarios = await City.findOne({_id:id})
        }catch(error){
            console.log(error)
        }
        res.json({respuesta: itinerarios, success:true})
    },

    deleteCity: async(req,res)=>{
        let city
        const id = req.params.id
        try {
            city = await Iteraries.findOneAndDelete({ _id: id })
        } catch(error) {
            console.log(error)
        }
        res.json({response: city})
    },


    modifyCity: async(req,res)=>{
        let id = req.params.id
        let itinerarios = req.body
        let actualizado
        try{
            actualizado = await Iteraries.findOneAndUpdate({ _id : id }, itinerarios, { new : true })
        }catch(error){
            console.log(error)
        }
        res.json({success : actualizado ? true : false})
    }
}

module.exports = itinerariesControllers;