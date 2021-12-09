
const initialState = {
    usuario:{userName:''},
}

const authReducer = (state = initialState, action)=>{

    switch(action.type){
       case 'USER':
            return {
                ...state,
                usuario: action.payload
            }
        default:
            return state
    }


}
export default authReducer