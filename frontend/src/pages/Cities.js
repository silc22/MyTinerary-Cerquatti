import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

export default class Cities extends Component {

    state = {
        dataCities: [],
        searchCity: [],
    }


    componentDidMount() {
        axios.get("http://localhost:4000/api/cities")
            .then(res => this.setState({ dataCities: res.data.respuesta,  searchCity: res.data.respuesta}))
    }

    handleChange = (e) => {

        const valorDelImput = e.target.value.toLowerCase().trim();
        let filtred = [];
            filtred = this.state.dataCities.filter(ciudad => {
            const city = ciudad.nombre.toLowerCase().trim()
            return city.startsWith(valorDelImput)
        }) 
        this.setState({searchCity: filtred})
    }

 
    render() {
        const {searchCity} = this.state
        return (
            <>
                <div className="city-container">
                    <div className="subtitle-container">
                        <h2>FIND YOUR DREAM CITY:</h2>
                        <input type="search" placeholder="Enter a city name" onChange={this.handleChange}></input>
                        <p>Life in <span>Wanderlust</span></p>
                    </div>
                    <div className="city-container-card">
                        { searchCity.length > 0 ? searchCity.map((element) => {
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


