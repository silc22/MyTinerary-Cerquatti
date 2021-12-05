// state: info que esta en el store - apenas se monta adentro del state no hay nada en él
// de acuerdo a la action que reciba va a modificar el store de alguna manera a traves de los componentes
// SIEMPRE EL REDUCER TERMINA CON RETURN PORQUE TIENE QUE DEVOLVER UN NUEVO ESTADO. 
// 
const incialState = {listaCiudades: [], cityFiltered: [], city: {}}

const citiesReducer = (state = incialState, action) =>{
    // hay que evaluar el type de la accion - 
    switch(action.type){
        case 'GET_ALL_CITIES': 
            return {
                ...state,
                listaCiudades: action.payload,
                cityFiltered: action.payload
            }
        case 'GET_CITY':
            return {
                ...state,
                ciudad: action.payload,
            }
        case 'FILTRO':
        const  { cities, value} = action.payload
        const filtered = cities.filter(city => city.nombre.toLowerCase().startsWith(value.toLowerCase().trim()))
    
            return{
                ...state,
                cityFiltered: filtered
            }

        default: 
            return state
        // DEVUELVE EL ESTADO ACTUAL- ESTO OCURRE LA PRIMERA VEZ NO MODIFICA NADA EL REDUCER: EN EL PPIO EL STORE HAY UN OBJETO LLAMADO LISTA DE CIUDADES QUE TIENE UN ARRAY VACIO COMO VALOR QUE LES DA POR DEFECTO CUANDO SE LE PASA EN LOS PARAMETROS
    }

    
}

export default citiesReducer

