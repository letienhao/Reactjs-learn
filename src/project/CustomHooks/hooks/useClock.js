import React, { useEffect, useState } from 'react'

const formatTime = (time) => {
  if (!time) return "";
  const hours = `0${time.getHours()}`.slice(-2);
  const minutes = `0${time.getMinutes()}`.slice(-2);
  const seconds = `0${time.getSeconds()}`.slice(-2);
  return `${hours} : ${minutes} : ${seconds}`;
};
const useClock = () => {
  useEffect(() => {
    const ClockTimeInterval = setInterval(() => {
      const now = new Date();
      //  'HH:mm:ss'
      const timeString = formatTime(now);
      setTimeString(timeString);
    }, 1000);
    return () => {
      clearInterval(ClockTimeInterval);
    };
  });
  const [timerString, setTimeString] = useState("");
  return {
    timerString,
    setTimeString
  }
}
export default useClock