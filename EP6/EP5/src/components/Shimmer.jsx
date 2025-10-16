import React from "react";
import ShimmerCard from "./ShimmerCard";
import "./Shimmer.css";

const Shimmer = () => {
  // Display 8 shimmer cards (same layout as your API cards)
  return (
    <div className="shimmer-container">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <ShimmerCard key={index} />
        ))}
    </div>
  );
};

export default Shimmer;
