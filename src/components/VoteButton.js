import React, { useState } from "react"

const VoteButton = ({ votes, emoji }) => {
  const [count, setCount] = useState(votes)
  const increment = () => {
    setCount(count + 1)
    console.log(count)
  }
  // console.log(votes)
  return (
    <button onClick= {increment}>{count}{emoji}</button>
  )
}

export default VoteButton