import { combineReducers } from 'redux';
import citiesReducer from './citiesReducer'
import itineraryReducer from './itineraryReducer'
import authReducer from './authReducer'

// solo un reducer puede modificar el store, y este reducer va a combinar a todos los reducer.
const mainReducer = combineReducers({
    cities : citiesReducer,
    intinerary : itineraryReducer,
    authReducer
})

export default mainReducer