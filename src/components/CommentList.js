import React from "react"
// import video from "../data/video"
import Comment from "./Comment"

const CommentList = ({videoComments}) => {
  const createComment = videoComments.map((comment) => (
    <Comment key={comment.id}
             commentUser={comment.user}
             commentContent={comment.comment} />
  ))
  return(
  <>
    <h3>{videoComments.length} Comments</h3>
    <div>{createComment}</div>
  </>  
  )
}

export default CommentList