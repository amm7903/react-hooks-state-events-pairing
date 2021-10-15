
import video from "../data/video.js";
import Video from "../Video.js";
import Comments from "./Comments.js";
import Description from "./Description.js"

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      {/* <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      /> */}
     <Video URL = {video.embedUrl}/>
     {<Description  upvotesVideo={video.upvotes} downvotesVideo ={video.downvotes}
     viewsVideo={video.views} createdatVideo ={video.createdAt}/> }
    <Comments commentsInComments= {video.comments} />
    </div>
  );
}

export default App;
