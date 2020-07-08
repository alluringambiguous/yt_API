//  IMPORTING LIBRARIES
import React from "react";
import VideoItem from './VideoItem';

//  DEFINING COMPONENT
const VideoList = ({ videos, onVideoSelect_A }) => {

  const RenderedList = videos.map(video => {
    return <VideoItem key={video.id.videoId} onVideoSelect_VI={onVideoSelect_A} video={video} />
  });

  return (
    <div className="ui relaxed divided list">
      {RenderedList}
    </div>
  );
};

//  EXPORTING COMPONENT
export default VideoList;
