import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import { AiFillUnlock } from "react-icons/ai";
import "./Slider.css";
import LockScreenImg from "./img/hinh1.webp";
import UnLockScreenImg from "./img/hinh2.webp";

const SliderSlice = () => {
  const [showUnlock, setShowUnlock] = useState(true);
  const [valueSlider, SetValueSlider] = useState(0);
  const handleInput = (e) => {
    SetValueSlider(e.target.value);
  };
  const [uiProps, SetUiProps] = useState({
    uiText: "Unlock screen",
    uiColor: "#eee",
    uiBg: `url(${LockScreenImg}) center/cover no-repeat`,
  });
  useEffect(() => {
    if (+valueSlider === 100) {
      setShowUnlock(false);
      SetUiProps((p) => {
        return {
          ...p,
          uiText: "Unlock success",
          uiBg: `url(${UnLockScreenImg}) center/cover no-repeat`,
        };
      });
    }
  }, [valueSlider]);
  const handleLockScreen = () => {
    SetValueSlider(0);
    setShowUnlock(true);
  };
  return (
    <div
      className="container flex flex-col items-center align-items-center justify-center rounded-xl h-[75vh] mt-[15vh] w-[330px] ml-[15vh] border-2 border-black shadow-sm
    "
      style={{
        background: uiProps.uiBg,
      }}
    >
      <h2
        className="mt-[50%]  text-4xl font-light"
        style={{ color: uiProps.uiColor }}
      >
        {uiProps.uiText}
      </h2>
      {showUnlock ? (
        <Slider
          width={"250px"}
          handleInput={handleInput}
          sliderValue={valueSlider}
        />
      ) : (
        <AiFillUnlock className="unlockIcon w-6" onClick={handleLockScreen} />
      )}
    </div>
  );
};

export default SliderSlice;
