import axios from 'axios'
// no se puede realizar llamadas asincronas

const cityAction = {  

    getAllCities: () => {
        // action creator: crea la accion, fectechea, recibe la rta y la despacha
        return async (dispatch, getState) => {
            let res = await axios.get('http://localhost:4000/api/cities')
            let informacion = res.data.respuesta
            dispatch({type: 'GET_ALL_CITIES', payload: informacion})
        }
    },

    getCity: (id)=>{
        return async(dispatch, getState) => {
            const res = await axios.get('http://localhost:4000/api/city/'+id)
            let informacion = res.data.respuesta
            console.log(informacion, "informacion")
            dispatch({type:'GET_CITY', payload: informacion})
        }
    }
}
    
export default cityAction






// filtroInput : (e) => {
    //         const valorDelImput = e.target.value.toLowerCase().trim();
    //         let filtred = [];
    //             filtred = state.listaCiudades.filter(ciudad => {
    //             const city = ciudad.nombre.toLowerCase().trim()
    //             return city.startsWith(valorDelImput)
    //         }) 
    //         this.setState({searchCity: filtred})
    // }
// }

// handleChange : (e) => {

//     const valorDelImput = e.target.value.toLowerCase().trim();
//     let filtred = [];
//         filtred = this.state.dataCities.filter(ciudad => {
//         const city = ciudad.nombre.toLowerCase().trim()
//         return city.startsWith(valorDelImput)
//     }) 
//     this.setState({searchCity: filtred})
// }