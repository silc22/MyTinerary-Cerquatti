const commentsReducers = (state= {allComments:[], itineraryId: ""}, action) => {
    switch(action.type) {
        case "COMMENT": 
            return {
                ...state,
                comments: action.payload
            }
        default: 
        return (
            state
        )
    }
}

export default commentsReducers