// const cities = [
//     {id: "1",
//     nombre:"Dolomitas",
//     pais: "Italy",
//     src: '/cities/italia-dolomitas.jpg'
//     },
//     {id: "2",
//     nombre:"Cotswolds",
//     pais: "United Kingdom",
//     src: '/cities/inglaterra-cotswolds.jpg'
//     },
//     {id: "3",
//     nombre:"Feroe",
//     pais: "Denmark",
//     src: '/cities/dinamarca-feroe.jpg'
//     },
//     {id: "4",
//     nombre:"Sa Foradada",
//     pais: "Spain",
//     src: '/cities/mallorca.jpg'
//     },
//     {id: "5",
//     nombre:"Masái Mara",
//     pais: "Kenya",
//     src: '/cities/kenia.jpg'
//     },
//     {id: "6",
//     nombre:"Zürich",
//     pais: "Switzerland",
//     src: '/cities/suiza.jpg'
//     },
//     {id: "7",
//     nombre:"Bariloche",
//     pais: "Argentina",
//     src: '/cities/argentina.jpg'
//     },
//     {id: "8",
//     nombre:"Chiang Mai",
//     pais: "Tailand",
//     src: '/cities/tailandia.jpg'
//     },
//     {id: "9",
//     nombre:"Bacalar",
//     pais: "México",
//     src: '/cities/mexico.jpg'
//     },
//     {id: "10",
//     nombre:"Ksamil",
//     pais: "Albania",
//     src: '/cities/albania.jpg'
//     },
//     {id: "11",
//     nombre:"Leeuwarden",
//     pais: "Netherlands",
//     src: './cities/paisesbajos.jpg'
//     },
//     {id: "12",
//     nombre:"Mestia",
//     pais: "Georgia",
//     src: "/cities/georgia.jpg"
//     },
//     {id: "13",
//     nombre:"San Vicente y las Granadinas",
//     pais: "Caribbean",
//     src: "/cities/granadinas.jpg"
//     },
//     {id: "14",
//     nombre:"Vanuatu",
//     pais: "Oceania",
//     src: "/cities/vanuatu.jpg"
//     },
//     {id: "15",
//     nombre:"Dominica",
//     pais: "Dominican Republic",
//     src: "/cities/dominica.jpg"
//     }
// ]


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