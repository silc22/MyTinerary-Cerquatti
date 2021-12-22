import React from 'react';
import {  useState, useRef } from "react"
import { connect } from 'react-redux'
import commentsActions from "../redux/actions/commentsActions"
import Comment from "./Comment"

const Comments = ( { data } ) => {
    

    const [allComments, setAllComments] = useState (data.comments)
    const [update, setUpdate] = useState (false)
    const inputHandler = useRef()

    const token = localStorage.getItem("token")

    const addNewComment = (e) => {
        let textValue = inputHandler.current.value
        data.addComment(data.itineraryId, textValue, token)
        .then((res)=> {
            setAllComments(res.response)   
            inputHandler.current.value = ""   
        })
        .catch(error=>console.log(error))
        
    }

    const deleteComment = (itineraryId, commentId) =>  {
        data.deleteComment(itineraryId, commentId, token)
        .then(res=>{
            if (res.success) {
                setAllComments(allComments.filter(comment=>comment._id !== commentId))
            } else {
                throw new Error()
            }   
        })
        .catch(error =>console.log(error))
    }

    const editComment = (commentId, comment) => {
        data.editComment(commentId, comment, token)
        .then((res)=> {
            if(res.success) {
            allComments.forEach(updatedComment=>{
                if(updatedComment._id === commentId){
                    updatedComment.comment = comment
                }
            })
            setAllComments(allComments)
            setUpdate(!update)
            }
        })
        .catch(error =>console.log(error))
    }

    return (
        <>
            <div className="comments-container">
            <h4>leave a comment to {data.usuarioNombre} </h4>
            <div className="comments">
                <p></p>
            </div>
            <div className="commentInputContainer"> 
            <input type="text" className="commentsInputs" autoComplete="nope"  ref={inputHandler} name="comment"   disabled={token ? false : true}
                    placeholder={token ? "Leave a coment!" : "You have to log in to comment"}
            />
            <button className="sendComment" onClick={addNewComment} disabled={token ? false : true}>
                Send
            </button>
       </div>
            </div>
        </>
    )
}



const mapDispatchToProps = {
    addComment: commentsActions.addComment,
    editComment: commentsActions.editComment,
    deleteComment: commentsActions.deleteComment

}

export default connect(null, mapDispatchToProps)(Comments)