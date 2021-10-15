import React from 'react'

 function Description({video: viewsVideo, createdAtVideo,upvotesVideo, downvotesVideo}) {
    return (
        <div>
            {/* <span>{viewsVideo.views}</span>
            <span> {createdAtVideo.createdAt}</span> */}
            <button> {upvotesVideo.upvotes} Upvotes</button>
            <button>{downvotesVideo.downvotes} Downvotes</button>
        
        </div>
    )
}

export default Description