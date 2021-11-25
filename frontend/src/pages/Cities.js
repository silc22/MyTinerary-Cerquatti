import React, { useEffect, useState } from 'react';


export default function Cities() {

    const [cities, setCities] = useState([])

    useEffect(()=>{
        fetch("http://localhost:4000/api/cities")
        .then(res => res.json)
        .then(data => setCities(data.response.cities))
        .catch(err => console.error(err.message))
    },[])


    return (
        <>
            {cities.map((element, index) => {
                return(
                <div key={index}>
                    <img src={element.src} alt={element.nombre}></img>
                <div className="text-container">
                    <p>{element.nombre}</p>
                    <p>{element.pais}</p>
                </div>
                </div>
                )
            })}
        </>
    )
}