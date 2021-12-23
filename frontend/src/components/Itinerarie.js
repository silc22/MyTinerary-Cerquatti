import React from 'react';
import { connect } from 'react-redux';
import itineraryAction from '../redux/actions/initineraryAction';
import activitiesActions from "../redux/actions/activitiesActions"
import Itinerary from './Itinerary';


const Itinerarie = ({ itineraryProps }) => {
    
    return (
        <>
            <div className="itinerary-container">
                <h2>City's itineraries</h2>
                <div className="itinerary-contenido">
                    { itineraryProps.length > 0 ?
                    itineraryProps.map((element) => {
                        return (
                            <Itinerary  element={element} />)})
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
    getItineraries: itineraryAction.getAllItineraies,
    getActivitiesByItinerary: activitiesActions.getActivitiesByItinerary,
}

export default connect(null, mapDispatchToProps)(Itinerarie)