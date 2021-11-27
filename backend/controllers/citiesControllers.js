const cities = [
    {id: "1",
    nombre:"Dolomitas",
    pais: "Italy",
    src: '/cities/italia-dolomitas.jpg'
    },
    {id: "2",
    nombre:"Cotswolds",
    pais: "United Kingdom",
    src: '/cities/inglaterra-cotswolds.jpg'
    },
    {id: "3",
    nombre:"Feroe",
    pais: "Denmark",
    src: '/cities/dinamarca-feroe.jpg'
    },
    {id: "4",
    nombre:"Sa Foradada",
    pais: "Spain",
    src: '/cities/mallorca.jpg'
    },
    {id: "5",
    nombre:"Masái Mara",
    pais: "Kenya",
    src: '/cities/kenia.jpg'
    },
    {id: "6",
    nombre:"Zürich",
    pais: "Switzerland",
    src: '/cities/suiza.jpg'
    },
    {id: "7",
    nombre:"Bariloche",
    pais: "Argentina",
    src: '/cities/argentina.jpg'
    },
    {id: "8",
    nombre:"Chiang Mai",
    pais: "Tailand",
    src: '/cities/tailandia.jpg'
    },
    {id: "9",
    nombre:"Bacalar",
    pais: "México",
    src: '/cities/mexico.jpg'
    },
    {id: "10",
    nombre:"Ksamil",
    pais: "Albania",
    src: '/cities/albania.jpg'
    },
    {id: "11",
    nombre:"Leeuwarden",
    pais: "Netherlands",
    src: './cities/paisesbajos.jpg'
    },
    {id: "12",
    nombre:"Mestia",
    pais: "Georgia",
    src: "/cities/georgia.jpg"
    },
    {id: "13",
    nombre:"San Vicente y las Granadinas",
    pais: "Caribbean",
    src: "/cities/granadinas.jpg"
    },
    {id: "14",
    nombre:"Vanuatu",
    pais: "Oceania",
    src: "/cities/vanuatu.jpg"
    },
    {id: "15",
    nombre:"Dominica",
    pais: "Dominican Republic",
    src: "/cities/dominica.jpg"
    }
]

const citiesControllers = {
    allCities:(req,res)=>{
        res.json({respuesta : cities})
    },
    cargarcity: (req,res)=>{
        city.push(req.body)
        res.json({respuesta: cities});
    },
    cityIndivdual:(req,res)=>{  
        const id = req.params.id           
        const city = cities.find(city => city.id.toString() === id)
        res.json({respuesta: city})
    },
    
}


module.exports = citiesControllers;