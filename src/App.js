import React, { useEffect, useState } from "react";
import Clock from "./project/CustomHooks/Clock";
import Flex from "./project/Flex/Flex";
import Gird from "./project/Grid/Gird";
import Input from "./project/Input/Input";
import Skeleton from "./project/LoadingSkeleton/Skeleton";
import SkeletonLoading from "./project/LoadingSkeleton/SkeletonLoading";
import Popover from "./project/Popover/Popover";
import SliderSlice from "./project/SlideSlider/SliderSlice";
import SynthesizerApp from "./project/Speed/SynthesizerApp";
import Transform from "./project/Transform/Transform";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, [])
  return (
    <div className="App">
      {/* <SliderSlice/> */}
      {/* <SynthesizerApp /> */}
      {/* <Popover /> */}
      {/* <Clock /> */}
      {/* <Flex /> */}
      {/* <Gird /> */}
      {/* <Input /> */}
      <Transform />
      {/* <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 ml-2">
        {!isLoading &&
          Array(4).fill(0).map((item, index) => {
            return <SkeletonLoading key={index} />
          })
        }
        {isLoading &&
          Array(4).fill(0).map((item, index) => {
            return <SkeletonLoading.Loading key={index} />
          })
        }
      </div> */}
    </div>
  );
}

export default App;
