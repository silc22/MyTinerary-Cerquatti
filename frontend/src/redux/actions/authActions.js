import axios from 'axios'

const authActions = {

    signUp: (newUser) => {
        return async (dispatch, getState) => {
            let response = await axios.post("http://localhost:4000/api/auth/signUp", {...newUser})
            if (response.data.success){
                localStorage.setItem("token", response.data.response.token)
                dispatch({type: "LOGGED", payload: response.data.response})
            }
            else {
                console.log(response.data.response)
            }
           return response 
        }
    },

    signIn: (signUser) => {
        return async (dispatch, getState) => {
            let response = await axios.post("http://localhost:4000/api/auth/signIn", {...signUser})
            if (response.data.success){
                localStorage.setItem("token", response.data.response.token)
                dispatch({type: "LOGGED", payload: response.data.response})
                }
            else {
                console.log(response.data.errors)
            }
            return response
        }
    },
    logOut: () => {
        return async (dispatch, getState) => {
            localStorage.removeItem("token")
            dispatch({type: "LOG_OUT", payload: {}})
        }
    },

    logInLS: (token) => {
        return async (dispatch, getState) => {
            try {
                let response = await axios.post("http://localhost:4000/api/auth/signIn/token", {} ,{
                headers: {
                    Authorization: "Bearer "+token
                }
                })
                dispatch({type: "LOGGED", payload: {name: response.data.response.name, url: response.data.response.url, _id: response.data.response._id}})
            } catch (error) {
                return dispatch ({type: "LOG_OUT"})
            } 
        }
    }
}

export default authActions