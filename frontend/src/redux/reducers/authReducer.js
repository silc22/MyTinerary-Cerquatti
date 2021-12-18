const initialState = 
    {
        usuario:
        {
        name: "",
        }}


const authReducer = (state = initialState, action)=>{
    switch(action.type){
       case 'LOGGED':
            return {
                ...state,
                usuario: action.payload
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