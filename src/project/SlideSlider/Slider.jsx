import React from "react";
import "./Slider.css";
const Slider = ({ sliderValue, handleInput, width }) => {
  const sliderStyle = {
    appearance: "none",
    width: !width ? "300px" : width,
    height: "50px",
    outline: "none",
    background: "rgba(188, 199, 188, 0.5)",
  };

  return (
    <input
      type="range"
      className="slider mb-2  rounded-[25px]"
      style={sliderStyle}
      onInput={handleInput}
      value={sliderValue}
    />
  );
};

export default Slider;
