import React from "react";
import { RxAvatar, RxDashboard } from "react-icons/rx";
import { TbCloud, TbHeadphones, TbLink, TbMenu2 } from "react-icons/tb";

const TopBar = () => {
  return (
    <div className="flex flex-wrap items-center justify-between mt-2 ">
      <div className="flex justify-between mx-2 mr-auto">
        <div className="flex justify-center  w-20 rounded-lg border border-t-[3px] border-b-[4px] items-center">
          <TbCloud size={16} style={{ fill: "#58B2CB" }} />
          <h2 className="ml-2">25%</h2>
        </div>
        <div className="flex justify-center rounded-lg w-16 border border-t-[3px] border-b-[4px] items-center ml-2">
          <h2>Filter</h2>
        </div>
      </div>
      <div className="flex justify-between mr-4">
        <div className=" relative flex justify-between rounded-lg ">
          <img
            className="w-12 h-12 sm-w-16 sm-h-16 object-cover object-center"
            src="/images/Ellipse30.svg"
            alt=""
          />
          <img
            className="w-12 h-12 sm-w-16 sm-h-16 object-cover object-center"
            src="/images/Ellipse31.svg"
            alt=""
          />
        </div>
        <div className="flex justify-between ml-4 items-center">
          <div className="flex justify-between  rounded-sm">
            <TbMenu2 size={20} />
            <RxDashboard size={20} />
          </div>
          <div className="ml-4rounded-sm">
            <TbHeadphones size={20} />
          </div>
          <div className=" flex justify-between ml-4 rounded-sm">
            <TbLink size={20} />
            <p className="ml-2">Share</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
