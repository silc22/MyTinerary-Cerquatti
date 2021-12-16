import axios from 'axios'

const authActions = {

    signUp: (newUser) => {
        return async (dispatch, getState) => {
            let response = await axios.post("http://localhost:4000/api/auth/signUp", {...newUser})
            console.log(response)
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

    signIn: (signUser) => {
        return async (dispatch, getState) => {
            let response = await axios.post("http://localhost:4000/api/auth/signIn", {...signUser})
            console.log(response)
            if (response.data.success){
                localStorage.setItem("token", response.data.response.token)
                dispatch({type: "LOGGED", payload: response.data.response})
                alert("usurio logueado")
            }
            else {
                console.log(response.data.response)
            }
            return response
        }
    },
}


export default authActions