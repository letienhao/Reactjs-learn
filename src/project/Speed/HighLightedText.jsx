import React from "react";
import "./index.css";
const HighLightedText = ({ splitText, text, from, to }) => {
  const [start, highlight, finish] = splitText(text, from, to);
  return (
    <div className="card" style={{ width: 500 }}>
      {start}
      <span className="bg-red-500">{highlight}</span>
      {finish}
    </div>
  );
};

export default HighLightedText;
