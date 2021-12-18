import axios from "axios"

const commentsActions = {
    addComment: (newComment, itineraryId) => {
        return async (dispatch, getState) => {
            let response = await axios.post(`http://localhost:4000/api/comments/${itineraryId}`, {...newComment})
            if (response.data.success){
                dispatch({type: "POST_COMMENT", payload: response.data.response})
            }
            return response
        }
    },
}

export default commentsActions