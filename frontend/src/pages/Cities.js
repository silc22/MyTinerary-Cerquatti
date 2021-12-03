import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import cityAction from '../redux/actions/cityAction';

 class Cities extends Component {

    componentDidMount() {
        this.props.getCities()
    }

    filtrado = (e) => {
        const valorDelImput = e.target.value.toLowerCase().trim();
        let filtred = [];
            filtred = this.state.cities.filter(ciudad => {
            const city = ciudad.nombre.toLowerCase().trim()
            return city.startsWith(valorDelImput)
        }) 
        this.setState({cities: filtred})
    }

    render() {
        const cities = this.props.citiesList

        return (
            <>
                <div className="city-container">
                    <div className="subtitle-container">
                        <h2>FIND YOUR DREAM CITY:</h2>
                        <input type="search" placeholder="Enter a city name" onChange={this.handleChange}></input>
                        <p>Life in <span>Wanderlust</span></p>
                    </div>
                    <div className="city-container-card">
                        { cities.length > 0 ? cities.map((element) => {
                            return (
                                <div className="container-card">
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
        citiesList: state.cities.listaCiudades
        // state: mainReducer, Cities: citiesReducer
    }      
}

const mapDispatchToProps = {
    getCities: cityAction.getAllCities
    
}


export default connect(mapStateToProps, mapDispatchToProps)(Cities)