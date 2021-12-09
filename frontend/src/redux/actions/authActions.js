const axios = require('axios')

const authActions = {

    registerUser: (userName,password) =>{
        return async(dispatch, getState)=>{
            try {
                // eslint-disable-next-line
                const user = await axios.post('http://localhost:4000/api/auth/signUp',{userName,password})
                if(user.data.success && !user.data.error){
                    
                    dispatch({type:'USER', payload:{userName}})
                }else{
                    // alert(user.data.error)
                    console.error(user.data.response)
                    return {errores: [{message:user.data.error}]}
                }
            }catch(error){
                
            }
        }
    },
    LogIn: (userName,password) => {
        return async(dispatch, getState)=>{
            try {
                console.log(userName,password)
                const user = await axios.post('http://localhost:4000/api/auth/signIn',{userName, password})
                if(user.data.success && !user.data.error){
                    dispatch({type:'usuario', payload:{userName:user.data.response}})
                }else{
                    alert(user.data.error)
                }
            }catch(error){
                console.error(error)
            }
        }
    }
}


module.exports = authActions