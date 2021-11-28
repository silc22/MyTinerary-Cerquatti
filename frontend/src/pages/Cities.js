import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

export default class Cities extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        axios.get("http://localhost:4000/api/cities")
            .then(res => this.setState({ dataCities: res.data.respuesta }))
    }

    render() {
        return (
            <>
                <div className="city-container">
                    <div className="subtitle-container">
                        <h2>FIND YOUR DREAM CITY</h2>
                        <p>Life in <span>Wanderlust</span></p>
                    </div>
                    <div className="city-container-card">
                        {this.state.dataCities && this.state.dataCities.map((element) => {
                            return (
                                <div className="container-card">
                                    <div key={element.id} className="city-img-container">
                                        <Link to={`/city/${element.id}`}>
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


