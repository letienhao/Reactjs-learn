import React, { useEffect, useRef, useState } from "react";

import useGetElementPopover from "./hooks/useGetElementPopover";
import DropdownContentWrapper from "./Components/Popover";
// react portal
// GetBoudingClientRest
const Popover = () => {
  const [isShowSetting, SetIsShowSetting] = useState(false);
  const nodeReft = useRef(null);
  const [positionPopover, handleClickElement, eleRef] = useGetElementPopover();
  useEffect(() => {
    function handleClickOutPopover(e) {
      if (nodeReft.current && !nodeReft.current.contains(e.target)) {
        SetIsShowSetting(false);
      }
    }
    document.addEventListener("click", handleClickOutPopover);
    return () => {
      document.removeEventListener("click", handleClickOutPopover);
    };
  }, []);
  const handleClickSetting = (e) => {
    SetIsShowSetting((s) => !s);
    handleClickElement(e);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative " ref={nodeReft}>
        <div
          className="w-20 h-20 cursor-pointer"
          onClick={handleClickSetting}
          ref={eleRef}
        >
          <img
            src="https://tophinhanh4k.com/wp-content/uploads/2022/02/6421daaa-e4a6-44fc-8420-9cdb27d653da-1.jpg"
            alt=""
            className="w-full h-full rounded-full"
          />
        </div>
        {isShowSetting && (
          <DropdownContentWrapper
            positionPopover={positionPopover}
            position="right"
            className="top-full bg-white rounded-2xl shadow w-[230px] py-6 px-5"
          >
            <MyComponent />
          </DropdownContentWrapper>
        )}
      </div>
    </div>
  );
};

const MyComponent = React.memo(function DropdownContent() {
  return (
    <div className="content">
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
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span>SingOut</span>
      </button>
    </div>
  );
});
export default Popover;
