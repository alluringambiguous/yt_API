//  IMPORTING LIBRARIES
import React from "react";
import "./VideoItem.css";

//  DEFINING REACT COMPONENT
const VideoItem = ({ video, onVideoSelect_VI }) => {
  //console.log(props.video)

  const onVideoClick = () => {
    onVideoSelect_VI(video);
  };

  return (
    <div onClick={onVideoClick} className="video-item item">
      <img
        alt="thumbnail"
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header"><h3>{video.snippet.title}</h3></div>
      </div>
    </div>
  );
};

//  EXPORTING
export default VideoItem;
