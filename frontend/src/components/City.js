import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import Itinerarie from './Itinerarie';
import { Link } from 'react-router-dom';


export const City = () => {

    const [city, setCity] = useState()
    let { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:4000/api/city/'+id)
        .then(res => setCity(res.data.respuesta))
    },[])


    return (
        <>
        <div className="global-container">
        <div className="container-city-padre">
                {city && <div className="container-card-city">
                    <h2>Discover the beauty of <span>{city.nombre}</span></h2>
                    <div key={city._id} className="city-img-container-indiv">
                        <img src={city.src} alt={city.nombre}/>
                        <div  className="name-container">
                            <p className="name-city">{city.nombre}</p>
                            <p>{city.pais}</p>
                        </div>
                    </div>
                </div>
                }
        </div>
        <div className="city-contenido">
            <Itinerarie/>
            <Link to="/Cities" className="link-city">
                <p>BACK TO CITIES</p>
            </Link>
        </div> 
        </div>    
        </>
    )
}

export default City