import React from "react";
import {
  TbCircleDotted,
  TbBlur,
  TbCircleCheck,
  TbDots,
  TbPlus,
} from "react-icons/tb";

export const StatusBar = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-4 mt-2">
      {/* create a 1 column on small screens and 4 columns on above small screen */}
      {/* TODO Status */}
      <div className="flex flex-col justify-between w-full ">
        <div className="flex justify-between w-full ">
          <div className="flex  w-full justify-start">
            <TbCircleDotted size={20} />
            <h2 className=" ml-2  font-bold tracking-tight leading-5 text-todo font-gt-walsheim">
              TODO
            </h2>
            <p className=" ml-2 font-bold tracking-tight leading-5 text-gray-900 font-gt-walsheim">
              2
            </p>
          </div>
          <div className="flex justify-end mr-4">
            <TbPlus size={20} />
            <TbDots className="ml-2" size={20} />
          </div>
        </div>
        <span className="border-b-[4px] border-gray-200 w-full  mt-4"></span>
      </div>

      {/* IN PROGRESS status */}
      <div className="flex flex-col justify-between w-full ">
        <div className="flex justify-between w-full">
          <div className="flex  w-full justify-start">
          <TbBlur style={{ fill: "" }}  size={20} />
            <h2 className=" ml-2  font-bold tracking-tight leading-5 text-gray-900 font-gt-walsheim">
            IN PROGRESS
            </h2>
            <p className=" ml-2 font-bold tracking-tight leading-5 text-gray-900 font-gt-walsheim">
            8
            </p>
          </div>
          <div className="flex justify-end mr-4">
            <TbPlus size={20} />
            <TbDots className="ml-2" size={20} />
          </div>
        </div>
        <span className="border-b-[4px] border-gray-200 w-full mt-4"></span>
      </div>
   

      {/* COMPLETE status */}
      <div className="flex flex-col justify-between w-full ">
        <div className="flex justify-between w-full">
          <div className="flex  w-full justify-start">
          <TbCircleCheck className="fill-check-mark-color text-check-mark-color " size={20} />
            <h2 className=" ml-2  font-bold tracking-tight leading-5 text-gray-900 font-gt-walsheim">
            COMPLETED
            </h2>
            <p className=" ml-2 font-bold tracking-tight leading-5 text-gray-900 font-gt-walsheim">
            2
            </p>
          </div>
          <div className="flex justify-end mr-4">
            <TbPlus size={20} />
            <TbDots className="ml-2" size={20} />
          </div>
        </div>
        <span className="border-b-[4px] border-gray-200 w-full mt-4 "></span>
      </div>

      <div className="hidden md:block"></div>
    </div>
  );
};

export default StatusBar;
