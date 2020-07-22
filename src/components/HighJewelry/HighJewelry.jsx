import React from "react";
import "./HighJewelry.less";
const HighJewelry = () => {
  return (
    <div className="high-jewelry">
      <video autoPlay muted loop>
        <source
          src="https://s3.us-east-2.amazonaws.com/chrismenardpublic.zoomvideos/004-bird-in-tree.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default HighJewelry;
