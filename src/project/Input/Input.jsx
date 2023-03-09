import React from "react";
import "./index.scss";
const Input = () => {
  return (
    <div>
      <div className="form-field p-5">
        <input
          type="text"
          className="form-input border border-gray-500 rounded-xl w-full h-[50px]  transition-all"
          placeholder=" "
        />
        <label htmlFor="" className="form-label">
          Name
        </label>
      </div>
    </div>
  );
};

export default Input;
