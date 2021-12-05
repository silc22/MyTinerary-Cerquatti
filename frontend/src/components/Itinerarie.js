import React from 'react';
import { connect } from 'react-redux';
import itineraryAction from '../redux/actions/initineraryAction';
import ViewMore from './ViewMore';

const Itinerarie = ({ itineraryProps }) => {
    
     let dolar = "💵"
     let clock = "⌛"
     let heart = "❤️"

    return (
        <>
       
            <div className="itinerary-container">
                <h2>City's itineraries</h2>
                <div className="itinerary-contenido">
                    { itineraryProps.length > 0 ?
                    itineraryProps.map((element) => {
                        return (
                            <div className="itinerary-container-card">
                                <h3>{element.itinerarioNombre}</h3>
                                <div className="img-info-container">
                                    <div key={element._id} className="itinerary-img-container">
                                        <img src={element.usuarioFoto} alt={element.usuarioNombre} />
                                        <p className="name-usuario">{element.usuarioNombre}</p>
                                    </div>
                                    <div className="name-itinerary">
                                        <p><span>Price: </span>{(dolar).repeat(element.price)}</p>
                                        <p><span>Duration: </span>{(clock).repeat(element.duracion)}</p>
                                        <p><span>Likes: </span> {heart}{element.likes} </p>
                                        <p><span>Hashtags: </span>{element.hashtags}</p>
                                    </div>
                                </div>
                                <ViewMore />
                            </div>
                        )
                    }
                    )
                        : 
                        <p className="aviso-alert">
                            NO ITINERARY FOR THIS CITY YET :(
                        </p>
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