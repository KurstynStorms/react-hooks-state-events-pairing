import video from "../data/video.js";
import VideoInfo from "./VideoInfo.js";
import ButtonContainer from "./ButtonContainer.js";
import CommentList from "./CommentList"
import CommentSection from "./CommentSection.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
      />
      <VideoInfo 
        videoTitle={video.title}
        videoViews={video.views}
        videoCreatedAt={video.createdAt}
      />
      <ButtonContainer 
        videoUpvotes={video.upvotes}
        videoDownvotes={video.downvotes}
      />
      <CommentSection 
        videoComments={video.comments}
      /> 
    </div>
  )
}

export default App;
