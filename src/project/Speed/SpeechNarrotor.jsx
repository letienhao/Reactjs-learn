import React, { useState } from "react";
import { AiFillRobot, AiOutlineRobot } from "react-icons/ai";
import HighLightedText from "./HighLightedText";
const SpeechNarrotor = ({ text }) => {
  const splitText = (text, from, to) => [
    text.slice(0, from),
    text.slice(from, to),
    text.slice(to),
  ];
  const [highLightedText, setHighlineSection] = useState({
    from: 0,
    to: 0,
  });
  const synth = window.speechSynthesis;
  let utterance = new SpeechSynthesisUtterance(text);
  utterance.addEventListener("boundary", ({ charIndex, charLength }) => {
    setHighlineSection({ from: charIndex, to: charIndex + charLength });
  });
  const [showPlay, setShowPlay] = useState(false);
  const [speed, setSpeed] = useState(1);
  const handleChangeSpeed = (e) => {
    setSpeed(e.target.value);
  };
  // handles
  const handlePlay = () => {
    synth.speak(utterance);
    synth.resume();
    setShowPlay(true);
  };
  const handlePause = () => {
    synth.pause();
    setShowPlay(false);
  };
  utterance.rate = speed;
  return (
    <div>
      <div
        className="container flex flex-col items-center"
        styles={{ gap: 30 }}
      >
        <h1 className="text-4xl">SpeechNarrotor</h1>
        {showPlay ? (
          <AiFillRobot
            className="text-[100px] cursor-pointer text-blue-500"
            onClick={handlePause}
          />
        ) : (
          <AiOutlineRobot
            className="text-[100px] cursor-pointer"
            onClick={handlePlay}
          />
        )}
        <HighLightedText
          splitText={splitText}
          text={text}
          {...highLightedText}
        />
      </div>
      <div className="form-group flex flex-col">
        <label htmlFor="">Rate: {speed}</label>
        <input
          className="mt-2 mb-[40px]"
          type="range"
          step=".1"
          max="2"
          min=".5"
          value={speed}
          onChange={handleChangeSpeed}
        />
      </div>
    </div>
  );
};

export default SpeechNarrotor;
