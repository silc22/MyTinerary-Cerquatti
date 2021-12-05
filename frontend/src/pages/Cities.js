import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import cityAction from '../redux/actions/cityAction';

 class Cities extends React.Component {

    componentDidMount() {
        this.props.getCities()
    }



    render() {
        const { filtered, cities } = this.props


        return (
            <>
                <div className="city-container">
                    <div className="subtitle-container">
                        <h2>FIND YOUR DREAM CITY:</h2>
                        <input type="search" placeholder="Enter a city name" onChange={(value) =>this.props.filtrar(cities,value.target.value)}></input>
                        <p>Life in <span>Wanderlust</span></p>
                    </div>
                    <div className="city-container-card">
                        { filtered.length > 0 ? filtered.map((element) => {
                            return (
                                <div className="container-card" key={element._id}>
                                    <div key={element._id} className="city-img-container">
                                        <Link to={`/city/${element._id}`}>
                                            <img src={element.src} alt={element.nombre} />
                                        </Link>
                                        <div className="name-container">
                                            <p className="name-city">{element.nombre}</p>
                                            <p>{element.pais}</p>
                                        </div>
                                    </div>
                                </div>)
                        })
                        :<p className="aviso-alert">your search does not exist</p>
                    } 
                    </div>
                    
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        cities: state.cities.listaCiudades,
        filtered: state.cities.cityFiltered
    }      
}

const mapDispatchToProps = {
    getCities: cityAction.getAllCities,
    filtrar: cityAction.filtrar
}


export default connect(mapStateToProps, mapDispatchToProps)(Cities)