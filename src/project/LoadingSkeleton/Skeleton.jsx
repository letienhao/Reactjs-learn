import React from "react";
import "./index.scss";
const Skeleton = ({ className = "" }) => {
  return (
    <div class="card is-loading ">
      <div class={`image ${className}`}></div>
    </div>
  );
};

export default Skeleton;
