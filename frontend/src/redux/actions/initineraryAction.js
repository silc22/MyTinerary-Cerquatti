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
    },

    likeItinerary: (id, token) =>{
        return async () => {
                try{
                    const response = await axios.put(`http://localhost:4000/api/itinerary/like/${id}`, {},{
                        headers:{
                            Authorization: `Bearer ${token}`
                        }
                    })
                    return response
                } catch(error) {
                    console.error(error)
                }
        }
    },
    
    sendComment: (commentInfo)=>{
        return async(dispatch, getState)=>{
            const response = await axios.post('http://localhost:4000/api/itinerary/comments', commentInfo)
            return response
        }
    },
  
    deleteComment: (IDs)=> {
        return async(dispatch, getState)=>{
            const response = await axios.delete('http://localhost:4000/api/itinerary/comments', {data: IDs}) 
            return response.data.response
        }
    },
  
    editComment: (itineraryId, commentInfo)=> {
        return async(dispatch, getState)=>{
            const response = await axios.put('http://localhost:4000/api/itinerary/comments/' + itineraryId, commentInfo )
            return response.data.response
        }
     }
}

export default itineraryAction