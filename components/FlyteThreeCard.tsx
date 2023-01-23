import React from "react";
import Image from "next/image";
import { BsChatSquareDots, BsLink } from "react-icons/bs"
import { TbCircleCheck } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";

export const FlyteThreeCard = () => {
  return (
    <div className="flex flex-col justify-start gap-3 bg-gray-50 border rounded-lg mt-4 mb-4 h-80 w-full">
      <h2>FLYTE-3</h2>
      <h2>Dashboard Design</h2>
      <div className="flex  items-center">
        <Image className="w-full" width={'40'} height={80} src={"/images/flyte3.svg"} alt="" />
      </div>
      <div className="flex  justify-between">
        <div className="bg-blue-200 rounded-lg inline-block">
          <p className="flex justify-center items-center">
            <span className="text-blue-700 text-lg">UI Design</span>
          </p>
        </div>
        <div className="flex justify-start">
          <div className="relative rounded-full overflow-hidden z-0 -mr-4">
            <img
              className="w-12 h-12 sm-w-16 sm-h-16 object-cover object-center"
              src="/images/avatar6.svg"
            />
          </div>
          <div className="relative rounded-full overflow-hidden  sm:ml-0 z-10 -mr-4">
            <img
              className="w-12 h-12 sm-w-16 sm-h-16 object-cover object-center"
              src="/images/avatar3.svg"
            />
          </div>
          <div className="relative rounded-full overflow-hidden z-20 ml-4 sm:ml-0">
            <img
              className="w-12 h-12 sm-w-16 sm-h-16 object-cover object-center"
              src="/images/avatar7.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <span className="border-b-[1px]  border-gray-200 w-full mb-4"></span>
      <div className="flex justify-between">
        <div className="flex justify-start items-center mr-auto">
          <span><BsChatSquareDots /></span>
          <span className="ml-2">5</span>
          <span><TbCircleCheck className="ml-4" /></span> 
          <span className="ml-2">4/8</span>     
          <span className="ml-4"><BsLink size={20} /></span>
          <span className="ml-2">1</span>     
        </div>
        <div className="flex  mr-4 items-center">
          <span><SlCalender /> </span>
          <span className="ml-2">JUN</span> 
        </div>
      </div>
    </div>
  );
};

export default FlyteThreeCard;

