
const authReducer = (state =  {usuario:{email:''}}, action)=>{
    console.log(action)
    switch(action.type){
       case 'LOGGED':
            return {
                ...state,
                usuario: action.payload
            }
        default:
            return state
    }


}
export default authReducer