import React from "react";
import "./Fashion.less";
const Fashion = () => {
  return (
    <div className="fashion">
      <video autoPlay muted loop>
        <source
          src="https://vod-progressive.akamaized.net/exp=1595391803~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2804%2F16%2F414024657%2F1780860562.mp4~hmac=cda9afca82c5dc29a273f22a93a368e91ba29a0c4ce70a354a1c5db16d205622/vimeo-prod-skyfire-std-us/01/2804/16/414024657/1780860562.mp4?filename=Apple+Blossom+-+37444.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Fashion;
