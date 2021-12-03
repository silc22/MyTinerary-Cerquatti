import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import itineraryAction from '../redux/actions/initineraryAction';

export const Itinerarie = ({itineraryProps}) => {

    return (
        <>
        <div className="global-container">
            <div className="city-contenido">
                <h3>Itineraries</h3>
                {itineraryProps.map((element) =>{
                    return(
                    <div className="container-card-city">
                        <h2>{element.itinerarioNombre}</h2>
                        <div key={element._id} className="city-img-container-indiv">
                            <img src={element.usuarioFoto} alt={element.usuarioNombre}/>
                            <div  className="name-container">
                                <p className="name-city">{element.usuarioNombre}</p>
                                <p>{element.price}</p>
                                <p>{element.duracion}</p>
                            </div>
                        </div>
                </div>
                )}
                )} 
            </div> 
        </div>     
        </>
    )
}

const mapDispatchToProps = {
    getItineraries: itineraryAction.getAllItineraies
}

export default connect(null, mapDispatchToProps)(Itinerarie)