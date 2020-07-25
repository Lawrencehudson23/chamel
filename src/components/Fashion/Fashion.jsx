import React from "react";
import "./Fashion.less";
const Fashion = () => {
  return (
    <div className="fashion">
      <video autoPlay muted loop>
        <source
          src="https://pixabay.com/videos/download/video-37444_small.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Fashion;
