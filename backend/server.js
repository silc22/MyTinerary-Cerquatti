const express = require("express");
const cors = require("cors");

const cities = [
    {nombre:"Dolomitas",
    pais: "Italy",
    src: './cities/italia-dolomitas.jpg'
    },
    {nombre:"Cotswolds",
    pais: "United Kingdom",
    src: './cities/inglaterra-cotswolds.jpg'
    },
    {nombre:"Feroe",
    pais: "Denmark",
    src: './cities/dinamarca-feroe.jpg'
    },
    {nombre:"Sa Foradada",
    pais: "Spain",
    src: './cities/mallorca.jpg'
    },
    {nombre:"Masái Mara",
    pais: "Kenya",
    src: './cities/kenia.jpg'
    },
    {nombre:"Zürich",
    pais: "Switzerland",
    src: './cities/suiza.jpg'
    },
    {nombre:"Bariloche",
    pais: "Argentina",
    src: './cities/argentina.jpg'
    },
    {nombre:"Chiang Mai",
    pais: "Tailand",
    src: './cities/tailandia.jpg'
    },
    {nombre:"Bacalar",
    pais: "México",
    src: './cities/mexico.jpg'
    },
    {nombre:"Ksamil",
    pais: "Albania",
    src: './cities/albania.jpg'
    },
    {nombre:"Leeuwarden",
    pais: "Netherlands",
    src: './cities/paisesbajos.jpg'
    },
    {nombre:"Mestia",
    pais: "Georgia",
    src: "./cities/georgia.jpg"
    },
    {nombre:"San Vicente y las Granadinas",
    pais: "Caribbean",
    src: "./cities/granadinas.jpg"
    },
    {nombre:"Vanuatu",
    pais: "Oceania",
    src: "./cities/vanuatu.jpg"
    },
    {nombre:"Dominica",
    pais: "Dominican Republic",
    src: "./cities/dominica.jpg"
    }
]


const app = express()
app.use(cors())


app.get("/api/cities", (req,res) =>{
    console.log("HOLA")
    res.json({response: {cities}})
})

app.listen(4000, () => {
    console.log("hola este es el sv")
})