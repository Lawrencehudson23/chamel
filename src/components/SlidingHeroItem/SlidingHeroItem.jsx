import React from "react";
import { Link } from "@reach/router";
import "./SlidingHeroItem.less";

const SlidingHeroItem = ({ title, imgUrl, subtitle }) => {
  return (
    <Link
      to="#"
      className="sliding-hero__item"
      style={{
        backgroundImage: `url("${imgUrl}")`,
      }}
    >
      <h2 className="heading-2 sliding-hero__item--title">{title}</h2>
      <span className="sliding-hero__item--subtitle">{subtitle}</span>
      <button>
        <span> SEE MORE</span>
      </button>
    </Link>
  );
};

export default SlidingHeroItem;
