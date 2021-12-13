import axios from 'axios';
import React, { useEffect , useState } from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux"
import authActions from "../redux/actions/authActions"


const  SignUp = (props) => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        axios.get('https://restcountries.com/v2/all?fields=name')
            .then(res => setCountries(res.data))
            .catch(err => console.error(err))
    },[])

    const [newUser, setNewUser] = useState ({
        name: "",
        lastName: "",
        country: "",
        email: "",
        url: "",
        password: "",
    })

    const inputHandler = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
            
        })
    }

    // const responseGoogle = (res) => {
    //     console.log(res)
    //     let googleUser = {
    //         name: res.profileObj.name,
    //         email: res.profileObj.email, 
    //         password: res.profileObj.googleId,
    //         google: true,
    //     }
    //     props.signUp(googleUser)
    //     .then((response) => response.data.success)
    //     .catch((error) => console.log(error))
    // }

    const submitForm = () => {
        props.signUp(newUser)
    }


    return (
        <div className="cointainer-all">
                <div className="form-neon">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                        <form action="" method="">
                            <div className="inputs-container">
                                <h2>Register account 🚀</h2>
                                <label htmlFor="name">Name:</label>
                                    <input type="text" name="name" id="name" onChange={inputHandler}/>
                                <label htmlFor="lastName">Last Name:</label>
                                    <input type="text" name="lastName" id="lastName" onChange={inputHandler}/>                   
                                <div className="select-container">
                                    <p>Country:</p>
                                    <select name="country" id="country-select" onChange={inputHandler}>
                                        <option defaultValue value="Choose one">Choose one</option>
                                        {countries.map(country => <option key={country.name} value={country.name}>{country.name}</option>)}
                                    </select>
                                </div>
                                <label htmlFor="email">Email:</label>
                                    <input type="email" name="email" id="email" onChange={inputHandler} />
                                <label htmlFor="url">URL Photo:</label>
                                    <input type="url" name="url" id="url" onChange={inputHandler} />
                                <label htmlFor="password">Password:</label>
                                    <input type="password" name="password" id="password" onChange={inputHandler} />
                                <div className="ppal-btn">
                                    <Link to="/" className="btn-form" onClick={submitForm}>
                                        Sign Up
                                    </Link>
                                    <Link to={"/"} className="btn-form">
                                        Sign Up with google <i className="fab fa-google"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="btns-container">
                                <p>explore the world with <b>Mytineraries</b></p>
                                <Link to="/" className="logo-form">
                                    <img src="/logo-mt.png" alt="MyTinerary Logo"></img>
                                </Link>
                                <div className="signUp">
                                    <p>Already have an account?</p>
                                    <Link as={Link} to={"/"} className="btn-form">
                                        Sign In
                                    </Link>
                                </div>
                            </div>
                        </form>
                </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        name: state.authReducer.name
    }
}

const mapDispatchToProps = {
    signUp: authActions.signUp
}

export default connect (mapStateToProps, mapDispatchToProps)(SignUp)