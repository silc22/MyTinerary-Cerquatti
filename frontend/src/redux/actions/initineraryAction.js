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

    addComment: (itineraryId, comment, token) => {
        return async () => {
            try {
                let response = await axios.put(`http://localhost:4000/api/comments/${itineraryId}`, {comment, type: "addComment"},
                {headers: {
                    Authorization: "Bearer "+token
                    }
                })
                if (response.data.success) {
                    return {
                        success: true, response: response.data.response
                    }
                } else {
                    throw new Error()
                }     
            } catch (error) {
                return {
                    success: false, response: error
                }
            }
        }
    },

    deleteComment: (itineraryId, commentId, token) => {
        return async (dispatch) => {
            try {
                let response = await axios.put(`http://localhost:4000/api/comments/${itineraryId}`, {commentId, type: "deleteComment"},
                {headers: {
                    Authorization: "Bearer "+token
                    }
                })
                if (response.data.success) {
                    return {
                        success: true
                    }
                } else {
                    throw new Error()
                }
            } catch (error) {
                return {
                    success: false, response: error
                }
            }
        }
    }, 

    editComment: (commentId, comment, token) => {
        return async () => {
            try {
                let response = await axios.put(`http://localhost:4000/api/comments/${commentId}`, { comment, type: "editComment"},
                {headers: {
                    Authorization: "Bearer "+token
                    }
                })
                if (response.data.success) {
                    return {
                        success: true, response: response.data.response
                    }
                } else {
                    throw new Error()
                }
            } catch (error) {
                return {
                    success: false,response: error
                }
            }
        }    
    }, 

    likeDislike: (itineraryId, token) => {
        return async () => {
            try {
                let response = await axios.put(`http://localhost:4000/api/itinerary/like/${itineraryId}`, {},
                {headers: {
                    Authorization: "Bearer "+token
                    }
                })
                return response
                
            }catch (error) {
                console.log(error)
            }
        }
    }
}

export default itineraryAction