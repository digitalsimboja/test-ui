import React from "react";
import { TbCircleCheck } from "react-icons/tb";
import { BsChatSquareDots } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";

export const FlyteSixCard = () => {
  return (
    <div className="relative h-80 w-full">
      <div className="absolute bottom-0 left-0 bg-gray-200 h-full w-full rounded-lg border border-b-2"></div>
      <div className="absolute left-0 bottom-2 flex flex-col justify-start gap-3 p-2 bg-gray-50 h-full w-full z-10 rounded-lg border border-b-2">
        <h2>FLYTE-6</h2>
        <h2>Brainstorming</h2>

        <div className="flex  justify-between">
          <div className="bg-blue-200 rounded-lg inline-block">
            <p className="flex justify-center items-center">
              <span className="text-blue-700 text-lg">Research</span>
            </p>
          </div>
          <div className="flex justify-start">
            <div className="relative rounded-full overflow-hidden z-0 -mr-4">
              <img
                className="w-12 h-12 sm-w-16 sm-h-16 object-cover object-center"
                src="/images/avatar6.svg"
              />
            </div>
            <div className="relative rounded-full overflow-hidden  sm:ml-0 z-10 mr-4">
              <img
                className="w-12 h-12 sm-w-16 sm-h-16 object-cover object-center"
                src="/images/avatar3.svg"
              />
            </div>
          </div>
        </div>
        <span className="border-b-[1px]  border-gray-200 w-full mb-4"></span>
        <div className="flex justify-between">
          <div className="flex justify-start items-center mr-auto">
            <span>
              <BsChatSquareDots />
            </span>
            <span className="ml-2">12</span>
          </div>
          <div className="flex  mr-4 items-center">
            <span>
              <TbCircleCheck />{" "}
            </span>
            <span className="ml-2">Done</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlyteSixCard;
