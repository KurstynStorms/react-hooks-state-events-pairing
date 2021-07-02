import React from "react"
// import video from "../data/video"
import VoteButton from "./VoteButton"

const ButtonContainer = ({ videoUpvotes, videoDownvotes}) => {
  return (
    <>
      <VoteButton votes={videoUpvotes}
                  emoji = "👍" />
      <VoteButton votes={videoDownvotes}
                  emoji = "👎"/>
    </>
  )
}

export default ButtonContainer