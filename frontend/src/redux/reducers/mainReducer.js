import { combineReducers } from 'redux';
import citiesReducer from './citiesReducer'
import itineraryReducer from './itineraryReducer'

// solo un reducer puede modificar el store, y este reducer va a combinar a todos los reducer.
const mainReducer = combineReducers({
    cities : citiesReducer,
    intinerary : itineraryReducer
})

export default mainReducer