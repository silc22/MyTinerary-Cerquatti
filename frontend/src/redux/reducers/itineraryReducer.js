

const intinerayReducer = (state = {listaItinerarios: []}, action) =>{
    // hay que evaluar el type de la accion - 
    switch(action.type){
        case 'GET_ALL_ITINERARIES': 
            return {
                ...state,
                listaItinerarios: action.payload,
            }

        case 'GET_ITINERARY':
            return{
                ...state,
                listaItinerariosPorCiudad: action.payload,
            }

        default: 
            return state
        // DEVUELVE EL ESTADO ACTUAL- ESTO OCURRE LA PRIMERA VEZ NO MODIFICA NADA EL REDUCER: EN EL PPIO EL STORE HAY UN OBJETO LLAMADO LISTA DE CIUDADES QUE TIENE UN ARRAY VACIO COMO VALOR QUE LES DA POR DEFECTO CUANDO SE LE PASA EN LOS PARAMETROS
    }

    
}

export default intinerayReducer