import React, { useState } from "react";
import SpeechNarrotor from "./SpeechNarrotor";

const SynthesizerApp = () => {
  const [text, setText] = useState("");
  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="container flex flex-col items-center">
      <SpeechNarrotor text={text} />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        value={text}
        className="border-2 border-red-400 w-[50%]"
        onChange={handleChangeText}
      />
    </div>
  );
};

export default SynthesizerApp;
