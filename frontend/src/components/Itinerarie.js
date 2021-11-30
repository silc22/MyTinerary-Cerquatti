import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';


export const Itinerarie = () => {

    const [itineraries, setItineraries] = useState()
    let { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:4000/api/itineraries/61a62cbf6c2cfb38d1d2f993')
        .then(res => setItineraries(res.data.respuesta))
    },[])


    return (
        <>
        <div className="global-container">
            <div className="city-contenido">
                <h3>Itineraries</h3>
                {<div className="container-card-city">
                        <h2>hola</h2>
                        <div key={itineraries._id} className="city-img-container-indiv">
                            <img src={itineraries.usuarioFoto} alt={itineraries.usuarioNombre}/>
                            <div  className="name-container">
                                <p className="name-city">{itineraries.usuarioNombre}</p>
                                <p>{itineraries.price}</p>
                                <p>{itineraries.duracion}</p>
                            </div>
                        </div>
                </div>
                }  
            </div> 
        </div>     
        </>
    )
}

export default Itinerarie