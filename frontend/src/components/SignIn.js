import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import authActions from '../redux/actions/authActions';
import GoogleLogin from 'react-google-login'


const SignIn = (props) => {

    const [signUser, setSignUser] = useState ({
        email: "", 
        password: "",
    })

    const inputHandler = (e) => {
        setSignUser({
            ...signUser, 
            [e.target.name]: e.target.value
        })
    }

    const submitForm = () => {
        props.signIn(signUser)
    }

    const responseGoogle = (res) => {
        let googleUser = {
            email: res.profileObj.email, 
            password: res.profileObj.googleId,
            google: true,
        }
        props.signIn(googleUser)
    }

    return (
        <div className="cointainer-all">
                <div className="form-neon">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                        <form>
                            <div className="inputs-container">
                                <h2>¡Welcome back!</h2>
                                <label htmlFor="email">Email:</label>
                                    <input type="email" name="email" id="email" onChange={inputHandler}/>
                                <label htmlFor="password">Password:</label>
                                    <input type="password" name="password" id="password" onChange={inputHandler} />
                                <div className="ppal-btn">
                                    <Link onClick={submitForm} to="/" className="btn-form" type="submit">
                                        Log In
                                    </Link>
                                    <Link to="#" className="btn-form">
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

const mapStateToProps = (state) => {
    return {
        name: state.authReducer.name
    }
}

const mapDispatchToProps = {
    signIn: authActions.signIn
}


export default connect (mapStateToProps, mapDispatchToProps)(SignIn)