import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import authActions from '../redux/actions/authActions';
import GoogleLogin from 'react-google-login'
import { useSelector } from 'react-redux';


const SignIn = (props) => {
    const { usuario } = useSelector(state => state.authReducer)


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
                    <form>
                        <div className="inputs-container">
                        {
                        usuario.name ? <h2>¡Welcome {usuario.name}!</h2>
                        : <h2>Hello!</h2>
                        }
                            
                            <label htmlFor="email">Email:</label>
                                <input type="email" name="email" id="email" onChange={inputHandler}/>
                            <label htmlFor="password">Password:</label>
                                <input type="password" name="password" id="password" onChange={inputHandler} />
                            <div className="ppal-btn">
                                <Link onClick={submitForm} to="" className="btn-form" type="submit">
                                    Log In
                                </Link>
                                <Link to="" >
                                <GoogleLogin
                                    clientId="364580156359-glg6vkvjvnag4e7ldm36478tge8h4qft.apps.googleusercontent.com"
                                    buttonText="Sign In with Goolge"
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                    cookiePolicy={'single_host_origin'}
                                />
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