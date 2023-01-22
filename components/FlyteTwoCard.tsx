import React from 'react'
import Image from "next/image";
import { RxAvatar } from "react-icons/rx";
import {
    TbBlur,
    TbBrandGravatar,
    TbCircleCheck,
    TbCircleDotted,
    TbCircleHalf,
    TbDots,
    TbPlus,
  } from "react-icons/tb";
  import { BsChatSquareDots } from "react-icons/bs";

export const FlyteTwoCard = () => {
  return (
    <div className="relative h-60 w-full mb-4 mt-4">
            <div className="absolute bottom-0 left-0 bg-gray-200 h-full w-full rounded-lg border border-b-2"></div>
            <div className="absolute left-0 bottom-2 p-2 bg-gray-50 h-full w-full z-10 rounded-lg border border-b-2">
              <div className="p-2">
                <h2 className="text-gray-500 ">FLYTE-2</h2>
                <h2 className="font-semibold">Moodboards</h2>
                <Image
                  width={212}
                  height={80}
                  src={"/images/image2.png"}
                  alt=""
                />
                <div className="flex justify-between">
                  <div className="items-center inline-block mt-2 p-2 bg-gray-200">
                    <h2 className="text-blue-500 font-semibold ">UI Design</h2>
                  </div>
                  <div className="flex justify-end mr-2 mt-2 p-2 items-center ">
                    <RxAvatar size={20} />
                    <RxAvatar size={20} />
                  </div>
                </div>
              </div>
              <span className="border-b-[1px]  border-gray-200 w-full p-2 mb-4"></span>
            </div>
          </div>
  )
}

export default FlyteTwoCard