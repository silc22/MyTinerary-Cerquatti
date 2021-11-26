import React, { useEffect, useState } from 'react';


export default function Cities() {

    const [cities, setCities] = useState([])

    useEffect(()=>{
        fetch("http://localhost:4000/api/cities")
        .then(res => res.json())
        .then(data => setCities(data.response.cities))
        .catch(err => console.error(err.message))
    },[])


    return (
        <>
            <div className="city-container">
            {cities.length > 0 ?
            cities.map((element) => 
                (
                <div className="container-card">
                    <div key={element.id} className="city-img-container">
                        <img src={element.src} alt={element.nombre}/>
                        <div className="name-container">
                            <p className="name-city">{element.nombre}</p>
                            <p>{element.pais}</p>
                        </div>
                    </div>
                </div>
            ))
            :<h2>Loading...</h2>
            }
            </div>
        </>
    )
}