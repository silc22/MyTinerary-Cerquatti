import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Search from '../components/Search';

export default class Cities extends Component {

    // constructor(props) {
    //     super(props)
    //      this.state = {}
    // }

    state = {
        dataCities: [],
        searchCity: "",
    }


    componentDidMount() {
        axios.get("http://localhost:4000/api/cities")
            .then(res => this.setState({ dataCities: res.data.respuesta }))
    }

    render() {
        const {dataCities, searchCity} = this.state
        const filterCity = dataCities.filter(city => {
            return city.nombre.toLowerCase().startsWith(searchCity.toLowerCase())
        })

        return (
            <>
                <div className="city-container">
                    <div className="subtitle-container">
                        <h2>FIND YOUR DREAM CITY:</h2>
                        <Search  handleChange={e => this.setState({ searchCity: e.target.value.trim()})} />
                        <p>Life in <span>Wanderlust</span></p>
                    </div>
                    <div className="city-container-card">
                        {( filterCity.length > 0 ? filterCity : this.state.dataCities).map((element) => {
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
                        })}
                    </div>
                    
                </div>
            </>
        )
    }
}


