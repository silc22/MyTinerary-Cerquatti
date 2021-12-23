const initialState = 
    {   usuario: { name: ""}, 
        userLogged: null,
        token: null
}


const authReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'LOGGED':
            console.log(action.payload.token)
            return {
                ...state,
                usuario: action.payload,
                userLogged: action.payload,
                token:  action.payload.token
            }
        case 'LOG_OUT':
            return{
                ...initialState,
            }
        default:
            return state
    }
    

}
export default authReducer