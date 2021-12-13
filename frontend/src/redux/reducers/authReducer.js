

const authReducer = (state = {name: null, _id: null}, action)=>{

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