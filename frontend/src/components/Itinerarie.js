import React from 'react';
import { connect } from 'react-redux';
import itineraryAction from '../redux/actions/initineraryAction';
import ViewMore from './ViewMore';

const Itinerarie = ({ itineraryProps }) => {
    
        
    return (
        
        <>
        
            <div className="itinerary-container">
                <h2>City's itineraries</h2>
                <div className="itinerary-contenido">
                    {itineraryProps.length > 0 ? itineraryProps.map((element) => {
                        return (
                            <div className="itinerary-container-card">
                                <h3>{element.itinerarioNombre}</h3>
                                <div className="img-info-container">
                                    <div key={element._id} className="itinerary-img-container">
                                        <img src={element.usuarioFoto} alt={element.usuarioNombre} />
                                        <p className="name-usuario">{element.usuarioNombre}</p>
                                    </div>
                                    <div className="name-itinerary">
                                        <p><span>Price: </span>{element.price}</p>
                                        <p><span>Duration: </span> {element.duracion}</p>
                                        <p><span>Likes:</span> {element.likes} </p>
                                        <p><span>Hashtags: </span> {element.hashtags}</p>
                                    </div>
                                </div>
                                <ViewMore />
                            </div>
                        )
                    }
                    )
                        : <p className="aviso-alert">NO ITINERARY YET FOR THIS CITY :(</p>
                    }
                </div>
            </div>
        </>
    )
}

const mapDispatchToProps = {
    getItineraries: itineraryAction.getAllItineraies
}

export default connect(null, mapDispatchToProps)(Itinerarie)