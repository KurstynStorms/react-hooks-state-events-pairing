import React from "react"


const VideoInfo = ({ videoTitle, videoViews, videoCreatedAt }) => {
  return (
    <div>
      <h1>{videoTitle}</h1>
        <p>{videoViews} Views | Uploaded {videoCreatedAt}</p>
    </div>
  )
}

export default VideoInfo