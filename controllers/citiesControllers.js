const City = require('../models/City')


const citiesControllers = {

    getCities: async(req,res)=>{
        let cities
        let error = null
        try{
            cities = await City.find()
        }catch(error){
            error = error
            console.error(error)
        }      

        res.json({
            respuesta: error ? 'ERROR' : cities, 
            success: error ? false : true,
            error: error
        })
    },

    addCity: (req, res) => {
        const {nombre, pais, src} = req.body
        new City({nombre, pais, src}).save()
        .then((response) => res.json({response}))
    },

    getCity: async(req,res)=>{  
        let cities
        const id = req.params.id        
        try{
            cities = await City.findOne({_id:id})
        }catch(error){
            console.log(error)
        }
        res.json({respuesta: cities, success:true})
    },

    deleteCity: async(req,res)=>{

        let city
        const id = req.params.id
        try {
            city = await City.findOneAndDelete({ _id: id })
        } catch(error) {
            console.log(error)
        }
        res.json({response: city})
    },


    modifyCity: async(req,res)=>{
        let id = req.params.id
        let cities = req.body
        let actualizado
        try{
            actualizado = await City.findOneAndUpdate({_id:id},cities,{new:true})
        }catch(error){
            console.log(error)
        }
        res.json({success:actualizado ? true : false})
    }
}

module.exports = citiesControllers;