import axios from 'axios'

// no se puede realizar llamadas asincronas
const itineraryAction = {
    
    getAllItineraies: () => {
        // action creator: crea la accion, fectechea, recibe la rta y la despacha
        return async (dispatch, getState) => {
            let res = await axios.get('http://localhost:4000/api/itineraries')
            let informacion = res.data.respuesta
            dispatch({type: 'GET_ALL_ITINERARIES', payload: informacion})
        }
    },

    conseguirItinerarioPorCiudad: (idCity) =>{
        return async (dispatch, getState) => {
            let res = await axios.get('http://localhost:4000/api/itinerary/'+idCity)
            let informacion = res.data.response
            dispatch({type: 'GET_ITINERARY', payload: informacion})
            
        }
    }
}

export default itineraryAction