import React from 'react';
import { Link } from 'react-router-dom';


const SignIn = () => {

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
                                <label htmlFor="fname">Name:</label>
                                    <input type="text" name="name" id="fname"/>
                                <label htmlFor="lname">Last Name:</label>
                                    <input type="text" name="lastname" id="lname"/>                   
                                <div className="select-container">
                                    <p>Country:</p>
                                    <select name="country" id="country-select">
                                        <option disabled selected hidden> Choose one</option>
                                    </select>
                                </div>
                                <label htmlFor="email">Email:</label>
                                    <input type="email" name="email" id="email"/>
                                <label htmlFor="url">URL Photo:</label>
                                    <input type="url" name="url" id="url"/>
                                <label htmlFor="password">Password:</label>
                                    <input type="password" name="password" id="password"/>
                                <div className="ppal-btn">
                                    <Link to="/" className="btn-form" type="submit">
                                        Sign Up
                                    </Link>
                                    <Link as={Link} to={"/"} className="btn-form">
                                        Sign Up with Google
                                    </Link>
                                </div>
                            </div>
                            <div className="btns-container">
                                <p>explore the world with <b>Mytineraries</b></p>
                                <Link to="/" className="logo-form">
                                    <img src="/logo-mt.png" alt="MyTinerary Logo"></img>
                                </Link>
                                <div className="signUp">
                                    <p>¿Already have an account?</p>
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


export default SignIn

