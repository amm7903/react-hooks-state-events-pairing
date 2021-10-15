import React from 'react'

export default function Video({URL}) {
    return (
        <div>
            <iframe
        width="919"
        height="525"
        src={URL}
        frameBorder="0"
        allowFullScreen
        
      />
            
        </div>
    )
}
