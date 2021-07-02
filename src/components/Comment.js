import React from "react"

const Comment = ({ commentUser, commentContent }) => {
  return (
    <div>
      <h4>{commentUser}</h4> 
      <p>{commentContent}</p>
    </div>
  )
}

export default Comment