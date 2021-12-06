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
                                <h2>¡Welcome back!</h2>
                                <label htmlFor="email">Email:</label>
                                    <input type="email" name="email" id="email"/>
                                <label htmlFor="password">Password:</label>
                                    <input type="password" name="password" id="password"/>
                                <div className="ppal-btn">
                                    <Link to="/" className="btn-form" type="submit">
                                        Log In
                                    </Link>
                                    <Link as={Link} to={"/"} className="btn-form">
                                        Log In with google <i className="fab fa-google"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="btns-container">
                                <p>explore the world with <b>Mytineraries</b></p>
                                <Link to="/" className="logo-form">
                                    <img src="/logo-mt.png" alt="MyTinerary Logo"></img>
                                </Link>
                                <div className="signUp">
                                    <p>Don't have an account?</p>
                                    <Link as={Link} to={"/"} className="btn-form">
                                        Sign Up
                                    </Link>
                                </div>
                            </div>
                        </form>
                </div>
        </div>
    )
}


export default SignIn