import React from "react";
import { RxAvatar, RxDashboard } from "react-icons/rx";
import { TbCloud, TbHeadphones, TbLink, TbMenu2 } from "react-icons/tb";

const TopBar = () => {
  return (
    <div className="flex p-2 justify-between mt-2 mb-2">
      <div className="flex justify-between mx-2 items-center">
        <div className="flex bg-gray-200 rounded-lg border-b-[4px] p-1 ">
          <TbCloud  size={20}  className="fill-cyan-500" />
          <h2 className="ml-2">25%</h2>
        </div>
        <div className="ml-4 bg-gray-200 rounded-lg items-center">
          <h2 className="p-2">Filter</h2>
        </div>
      </div>
      <div className="flex justify-between mr-4">
        <div className="flex justify-between bg-gray-300 rounded-lg ">
          <RxAvatar size={20} />
          <RxAvatar size={20} />
        </div>
        <div className="flex justify-between ml-4">
          <div className="flex justify-between bg-gray-200 rounded-sm">
            <TbMenu2 size={20} />
            <RxDashboard size={20} />
          </div>
          <div className="ml-4 bg-gray-200 rounded-sm">
            <TbHeadphones size={20} />
          </div>
          <div className=" flex justify-between ml-4 bg-gray-100 rounded-sm">
            <TbLink size={20} />
            <p className="ml-2">Share</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
