import React from "react";
import {
  TbCircleCheck,
} from "react-icons/tb";
import { BsChatSquareDots } from "react-icons/bs";
import { SlCalender } from "react-icons/sl"

export const FlyteFiveCard = () => {
  return (
    <div className="relative h-80 mt-4 mb-4 w-full">
      <div className="absolute bottom-0 left-0 bg-gray-200 h-full w-full rounded-lg border border-b-2"></div>
      <div className="absolute left-0 bottom-2 flex flex-col justify-start gap-3 p-2 bg-gray-50 h-full w-full z-10 rounded-lg border border-b-2">
        <h2>FLYTE-5</h2>
        <h2>Presentation</h2>
        <p>Help business to clearly define their anuual e-commerce digital strategy by creating a high-level plan.</p>

        <div className="flex  justify-between">
          <div className="bg-blue-200 rounded-lg inline-block">
            <p className="flex justify-center items-center">
              <span className="text-blue-700 text-lg">Planning</span>
            </p>
          </div>
          <div className="flex justify-start">
            
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
            <span>
              <BsChatSquareDots />
            </span>
            <span className="ml-2">11</span>

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

export default FlyteFiveCard;
