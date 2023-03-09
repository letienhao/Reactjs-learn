import React from "react";

const Flex = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-center gap-4 p-20">
        <div>
          <div className="w-40 h-40 border-4 border-gray-400 mt-[-90px]">
            Cao tùng anh
          </div>
          <div className="w-40 h-40 border-4 border-gray-400 mt-10">
            Cao tùng anh
          </div>
        </div>
        <div>
          <div className="w-40 h-40 border-4 border-gray-400">Cao tùng anh</div>
          <div className="w-40 h-40 border-4 border-gray-400">Cao tùng anh</div>
        </div>
      </div>
      <div className="grid grid-cols-2 w-full max-w-[570px] mx-auto gap-[30px] ">
        <div className=" box-item aspect-square bg-white border border-gray-500">
          Item main
        </div>
        <div className=" box-item aspect-square bg-white border border-gray-500">
          Item main
        </div>
        <div className=" box-item aspect-square bg-white border border-gray-500">
          Item main
        </div>
        <div className=" box-item aspect-square bg-white border border-gray-500">
          Item main
        </div>
      </div>
    </div>
  );
};

export default Flex;
