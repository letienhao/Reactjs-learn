import React from "react";
import PropTypes from "prop-types";
import useClock from "./hooks/useClock";
import useMagicColor from "./hooks/useMagicColor";
const Clock = (props) => {
  const { timerString } = useClock();
  const { colorRef } = useMagicColor();
  return (
    <div>
      Clock Timer
      <div className={`timer bg-${colorRef.current}-500`}>{timerString}</div>
    </div>
  );
};

Clock.propTypes = {};
export default Clock;
