import React from "react";
import "./Shimmer.css";

const ShimmerCard = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-img"></div>
      <div className="shimmer-line title"></div>
      <div className="shimmer-line subtitle"></div>
      <div className="shimmer-line rating"></div>
      <div className="shimmer-line price"></div>
    </div>
  );
};

export default ShimmerCard;
