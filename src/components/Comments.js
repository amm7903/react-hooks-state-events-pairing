import React from 'react'

function Comments({commentsInComments}) {
    return (
        <div>
        <h2> 
            {commentsInComments.length} Comments 
        </h2>
       {commentsInComments.map(comment => (<><h3>{comment.user}</h3> <p>{comment.comment} </p></>))} 

          

        </div>
    )
}

export default Comments;