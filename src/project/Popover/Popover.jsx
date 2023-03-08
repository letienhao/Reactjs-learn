import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
// react portal
// GetBoudingClientRest

const Popover = () => {
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  const [positionPopover, setPositionPopover] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const handleClickAvata = (e) => {
    const node = e.target.getBoundingClientRect();
    setPositionPopover({
      x: node.left,
      y: node.top + window?.scrollY,
      width: node.width,
      height: node.height,
    });
    setIsShowDropdown((s) => !s);
  };
  useEffect(() => {});
  return (
    <div className="flex items-center justify-center h-screen">
      <div className=" overflow-hidden">
        <div className="relative ">
          <div className="w-20 h-20 cursor-pointer" onClick={handleClickAvata}>
            <img
              src="https://tophinhanh4k.com/wp-content/uploads/2022/02/6421daaa-e4a6-44fc-8420-9cdb27d653da-1.jpg"
              alt=""
              className="w-full h-full rounded-full"
            />
          </div>
          {isShowDropdown && (
            <DropdownContent
              positionPopover={positionPopover}
              position="right"
            />
          )}
        </div>
      </div>
    </div>
  );
};

function DropdownContent({ positionPopover, position = "left" }) {
  if (typeof document === "undefined") return null;
  return ReactDOM.createPortal(
    <div
      className="absolute top-full bg-white rounded-2xl shadow z-10 w-[230px] py-6 px-5"
      style={{
        top: positionPopover.y + positionPopover.height * 1.5,
        [position]: positionPopover.x,
      }}
    >
      <div className="flex flex-col gap-5 border-b border-b-gray">
        <a
          href="#"
          className="font-medium text-gray-400 inline-block hover:text-blue-600"
        >
          Acount
        </a>{" "}
        <a
          href="#"
          className="font-medium text-gray-400 inline-block hover:text-blue-600 mb-5"
        >
          Setting
        </a>
      </div>
      <button className="flex items-center gap-3 mt-2 hover:opacity-80">
        <svg
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>SingOut</span>
      </button>
    </div>,
    document.getElementById("root")
  );
}
export default Popover;
