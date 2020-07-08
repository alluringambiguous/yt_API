//  IMPORTING LIBRARIES
import React from "react";

//  DEFINING COMPONENT
const VideoDetail = ({video}) => {

  if (!video){
    return <div></div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="align">
        <div className="ui embed">
          <iframe  width="560" height="315" title="video player" src={videoSrc} frameBorder="0" allowFullScreen />        
        </div>
      </div>

      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
      
    </div>
  );
}

//  EXPORTING COMPONENT
export default VideoDetail;
