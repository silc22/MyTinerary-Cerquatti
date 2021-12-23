import { useState } from 'react'
import { connect } from 'react-redux';
import itineraryAction from '../redux/actions/initineraryAction';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Swal from 'sweetalert2'


toast.configure()

const Comments = (props)=>{
    

    const {itineraryId, userLogged, itineraryComments} = props
    console.log(userLogged)
    const [allComments, setAllComments] = useState(itineraryComments);
    const [commentContent, setCommentContent] = useState('');
    const [isEditingComment, setIsEditingComment] = useState(false);
    const [editedComment, setEditedComment] = useState('');

    const sendComment = async() => {
        if(commentContent !== ''){
            setCommentContent('')
            const response = await props.sendComment({ userId: userLogged._id, comment: commentContent, itineraryId}) 
            setAllComments(response.data.response)
        }
    }
        
    const deleteSingleComment_ = async(IDs)=>{
        const response = await props.deleteComment(IDs)
        setAllComments(response)
    }
    

    const deleteSingleComment = async(IDs)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You are going to delete your comment!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteSingleComment_(IDs)
                Swal.fire(
                    'Deleted!',
                    'Your comment has been deleted',
                    'success'
                    )
                }
        })
    }

    const startEditingComment = (value)=>{
        setIsEditingComment(!isEditingComment)
        setEditedComment(value)
    }

    const sendEditedComment = async(itineraryId, commentInfo)=>{
        setIsEditingComment(!isEditingComment)
        const response = await props.editComment(itineraryId, commentInfo)
        setAllComments(response)
    }

    const notify = (error)=>{
        toast(`Must be logged to ${error}!`)
    }

   return<>

        <div className="comments-general-container">
            <div className="commentsTittle-container">
                <h1 className="commentsTittle">Comments</h1>
            </div>
            <div className="all-comments-container">
                {allComments.map((comment, i) => {
                    console.log(comment)
                    return (
                        <div className="comment" key={i}>
                        <div className="x-alineator">
                            <div>
                                <div className="authorComment-img" style={{backgroundImage: `url(${comment.userImg})`}} ></div>
                            </div>
                            <div className="commentContent-container">
                                
                                <p className={userLogged ? comment.userId === userLogged._id 
                                    ? !isEditingComment ? "comment-author" : "displayNone"
                                    : "comment-author" 
                                : "comment-author"}>
                                    <strong> {comment.userName}</strong>
                                </p>
                                
                                <p className={ userLogged ? comment.userId === userLogged._id
                                    ? !isEditingComment ? "comment-content" : "displayNone"
                                    : "comment-content"
                                : "comment-content"
                                } >{comment.comment}</p>
                                
                                {userLogged && comment.userId === userLogged._id && (
                                    <>
                                    <input type="text" value={editedComment} onChange={(e)=> setEditedComment(e.target.value)} className={isEditingComment ? "editingInput": "displayNone"} />
                                    <p className={isEditingComment ? "sendEditedIcon": "displayNone"} onClick={()=>sendEditedComment(itineraryId, {commentId: comment.userId, newComment: editedComment})}>
                                        ▶️
                                    </p>
                                    </>
                                )}
                            </div>

                            {userLogged && comment.userId === userLogged._id && (
                                <div className="modifyCommentIcons-container">
                                    <p onClick={()=> startEditingComment(comment.comment)} className={!isEditingComment ? "edit-icon" : "displayNone"}>🖊️</p>
                                    <p onClick={()=> deleteSingleComment({itineraryId: itineraryId, commentId: comment._id})} className={!isEditingComment ? "delete-icon" : "displayNone"}>🗑️</p>
                                </div>
                            )}
                        </div>
                        </div>
                    )
                })}
            </div>
                <div className="input-container">
                    <input type="text" value={commentContent} onChange={(e)=> setCommentContent(e.target.value)} className="comments-input" placeholder="Send a comment" />
                    
                    <div className="paperPlane-icon" onClick={userLogged ? sendComment : () => notify('Comment')}>
                        <p>💬</p>
                    </div>
                </div>
        </div>
    </>
}

const mapStateToProps = (state)=>{
    return {
            userLogged: state.authReducer.userLogged
    }
}

const mapDispatchToProps = {
   sendComment: itineraryAction.sendComment,
   deleteComment: itineraryAction.deleteComment,
   editComment: itineraryAction.editComment
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)

