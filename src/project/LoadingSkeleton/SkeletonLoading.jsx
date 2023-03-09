import React from "react";
import Skeleton from "./Skeleton";
const SkeletonLoading = () => {
  return (
    <div className=" border-2 border-gray-200 p-5 w-full max-w-[450px] shadow-lg rounded-md">
      <div className="card-img">
        <img
          src="https://noithatbinhminh.com.vn/wp-content/uploads/2022/08/anh-dep-28.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="card-title">
        <h3 className="text-xl ">Các hình ảnh đẹp thiên nhiên</h3>
        <p className="mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          incidunt veniam suscipit, animi, odio expedita architecto ex
          necessitatibus recusandae omnis exercitationem. Tempora, repellendus
          rem. Vitae beatae nulla eligendi ad pariatur?
        </p>
      </div>
      <div className="button">
        <button
          type="button"
          className="w-full h-full bg-green-500 p-4 rounded-xl mt-5 text-xl hover:bg-blue-500 active:bg-red-500"
        >
          Buy nows
        </button>
      </div>
    </div>
  );
};
const Loading = () => {
  return (
    <div className=" border-2 border-gray-200 p-5 w-full max-w-[450px] shadow-lg rounded-md">
      <div className="card-img">
        <Skeleton className="h-40" />
      </div>
      <div className="card-title">
        <h3 className="text-xl ">
          <Skeleton className="h-10" />
        </h3>
        <p className="mt-5">
          {Array(5)
            .fill(0)
            .map((item, index) => {
              return <Skeleton className="h-2 mb-2" key={index} />;
            })}
        </p>
      </div>
      <div className="button">
        <Skeleton className="w-full h-full p-4 rounded-xl mt-5 h-4" />
      </div>
    </div>
  );
};
SkeletonLoading.Loading = Loading;
export default SkeletonLoading;
