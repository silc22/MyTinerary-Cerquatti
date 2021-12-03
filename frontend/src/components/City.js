import React, { useEffect,  } from 'react';
import Itinerarie from './Itinerarie';
import { Link , useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import cityAction from '../redux/actions/cityAction';
import itineraryAction from '../redux/actions/initineraryAction';

export const City = (props) => {
    let { id } = useParams()

    useEffect(() => {
        props.getCities(id)
        props.itinerarioPorCiudad(id)
    },[])


    return (
        <>
        <div className="global-container">
        <div className="container-city-padre">
                {props.city && <div className="container-card-city">
                    <h2>Discover the beauty of <span>{props.city.nombre}</span></h2>
                    <div key={props.city._id} className="city-img-container-indiv">
                        <img src={props.city.src} alt={props.city.nombre}/>
                        <div  className="name-container">
                            <p className="name-city">{props.city.nombre}</p>
                            <p>{props.city.pais}</p>
                        </div>
                    </div>
                </div>
                } 
        </div>
        <div className="city-contenido">
            {props.itinerarios && <Itinerarie itineraryProps={props.itinerarios}/>}
            <Link to="/Cities" className="link-city">
                <p>BACK TO CITIES</p>
            </Link>
        </div> 
        </div>    
        </>
    )
}

const mapStateToProps = (state) => {
    return{
        city: state.cities.ciudad,
        itinerarios: state.intinerary.listaItinerariosPorCiudad
        // CREO UNA PROP PARA ESTE COMPONENTE Y LE ASIGNO UN CONTENIDO DEL STORE.
    }      
}

const mapDispatchToProps = {
    getCities: cityAction.getCity,
    itinerarioPorCiudad: itineraryAction.conseguirItinerarioPorCiudad,
}


export default connect(mapStateToProps, mapDispatchToProps)(City)
// ESTO ES UNA HIGH ORDER COMPONENT -> funcion de orden superior: funcion como parametro otra funcion 
// CONNECT PUEDE LLEGAR A RECIBIR DOS FUNCIONES PORQUE PUEDE ESTAR CONECTADO DE DOS MANERAS:
// PARA ESCUCHAR ---> FUNCION mapStateToProps ---> SOLO NECESITO CONSUMIR INFO: MAPEA EL STATE CENTRALIZADO O SEA EL STORE Y LO TRAE A LAS PROPS
// O PARA MODIFICAR---> FUNCION mapDispatchToProps