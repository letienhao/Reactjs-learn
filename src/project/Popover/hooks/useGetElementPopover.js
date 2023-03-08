import React, { useState, useRef, useEffect } from 'react'

const useGetElementPopover = () => {
  const eleRef = useRef()
  const [positionPopover, setPositionPopover] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const handleClickElement = (e) => {
    const node = e.target.getBoundingClientRect();
    setPositionPopover({
      x: node.left,
      y: node.top + window?.scrollY,
      width: node.width,
      height: node.height,
    });
  };
  useEffect(() => {
    function handleResizeWindow() {
      if (eleRef.current) {
        const node = eleRef.current.getBoundingClientRect();
        setPositionPopover({
          x: node.left,
          y: node.top + window?.scrollY,
          width: node.width,
          height: node.height,
        });
      }
    }
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  return (
    [positionPopover,
      handleClickElement,
      eleRef]
  )
}

export default useGetElementPopover