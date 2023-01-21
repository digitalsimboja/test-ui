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

export const FlyteOneCard = () => {
  return (
    <div className="relative h-60 w-full mb-8 mt-4">
            <div className="absolute bottom-0 left-0 bg-gray-300 h-full w-full -z-5 rounded-lg "></div>
            <div className="absolute left-2 bottom-2  bg-white h-full w-full z-10 transform rotate-3 rounded-lg">
              <div className="p-2 absolute flex flex-col w-full">
                <div className="flex justify-between">
                  <h2>FLYTE-1</h2>
                  <TbBrandGravatar size={20} className="mr-4" />
                </div>
                <h2 className="font-semibold mt-2 mb-1">UX Adjustimests</h2>
                <p>
                  Make UI/UX revisions for the project management dashboard on
                  Figma.
                </p>
                <div className="flex justify-between mt-2">
                  <div className="bg-blue-100 rounded-lg p-1 items-center text-blue-900 font-bold">
                    <h2>Research</h2>
                  </div>
                  <div className="flex justify-end mr-2">
                    <RxAvatar size={20} />
                    <RxAvatar size={20} />
                  </div>
                </div>
                <span className="border-b-[1px]  border-gray-200 w-full p-2 mb-4"></span>
                <div className=" flex justify-between">
                  <div className=" flex justify-start">
                    <BsChatSquareDots className="rounded-sm" size={20} />
                    <p className="font ml-2">3</p>
                  </div>
                  <div className="justify-end">
                    <Image
                      className="mr-8"
                      width={23}
                      height="31"
                      src={"/images/hands.svg"}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-2  right-2 bg-gray-200 h-full w-full z-5 transform rotate-3 rounded-lg"></div>
          </div>
  )
}

export default FlyteOneCard