import React from "react";
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
import Image from "next/image";
import FlyteOneCard from "./FlyteOneCard";

const Layout = () => {
  return (
    <div className="grid grid-cols-4  gap-12 p-4">
      <div className="flex justify-between flex-col ">
        <div className="flex justify-between">
          <div className="flex justify-start">
            <TbCircleDotted size={20} />
            <h2 className="ml-2">TODO</h2>
            <p className="ml-4">2</p>
          </div>
          <div className="flex justify-end">
            <TbPlus size={20} />
            <TbDots className="ml-2" size={20} />
          </div>
        </div>
        <span className="border-b-[4px] border-gray-200 w-full p-1 mb-4"></span>

        <div className="w-full flex-col">
          {/* First card */}
          <FlyteOneCard />

          {/* FLYTE-2 Card */}
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

          <div className="flex justify-center mt-4 text-blue-500 bg-gray-100 rounded-lg ">
            <div className="flex p-2 ">
              <TbPlus size={20} />
              <button>
                <p className="ml-2">ADD CARD</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between flex-col ">
        <div className="flex justify-between">
          <div className="flex justify-start">
            <TbBlur size={20} />
            <h2 className="ml-2">IN PROGRESS</h2>
            <p className="ml-4">8</p>
          </div>
          <div className="flex justify-end">
            <TbPlus size={20} />
            <TbDots className="ml-2" size={20} />
          </div>
        </div>
        <span className="border-b-[4px] border-gray-200 w-full p-1 mb-4"></span>
        <div className="w-full flex-col">
          <div className="relative h-40 w-full mb-8 mt-4">
            <div className="absolute bottom-0 left-0 bg-gray-500 h-full w-full -z-5"></div>
            <div className="absolute left-2 bottom-2  bg-red-500 h-full w-full z-10 transform rotate-3"></div>
            <div className="absolute bottom-0 left-4 bg-blue-500 h-full w-full z-5 transform rotate-3"></div>
          </div>

          <div className="relative h-40 w-full mb-4 mt-4">
            <div className="absolute bottom-0 left-0 bg-gray-500 h-full w-full rounded-lg"></div>
            <div className="absolute left-0 bottom-2  bg-red-500 h-full w-full z-10 rounded-lg"></div>
          </div>

          <div className="flex justify-center mt-4 text-blue-500 bg-gray-100 rounded-lg ">
            <div className="flex p-2 ">
              <TbPlus size={20} />
              <button>
                <p className="ml-2">ADD CARD</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between flex-col ">
        <div className="flex justify-between">
          <div className="flex justify-start">
            <TbCircleCheck size={20} />
            <h2 className="ml-2">COMPLETED</h2>
            <p className="ml-4">2</p>
          </div>
          <div className="flex justify-end">
            <TbPlus size={20} />
            <TbDots className="ml-2" size={20} />
          </div>
        </div>
        <span className="border-b-[4px] border-gray-200 w-full p-1 mb-4"></span>
        <div className="w-full flex-col">
          <div className="relative h-40 w-full mb-8 mt-4">
            <div className="absolute bottom-0 left-0 bg-gray-500 h-full w-full -z-5"></div>
            <div className="absolute left-2 bottom-2  bg-red-500 h-full w-full z-10 transform rotate-3"></div>
            <div className="absolute bottom-0 left-4 bg-blue-500 h-full w-full z-5 transform rotate-3"></div>
          </div>

          <div className="relative h-40 w-full mb-4 mt-4">
            <div className="absolute bottom-0 left-0 bg-gray-500 h-full w-full rounded-lg"></div>
            <div className="absolute left-0 bottom-2  bg-red-500 h-full w-full z-10 rounded-lg"></div>
          </div>

          <div className="flex justify-center mt-4 text-blue-500 bg-gray-100 rounded-lg ">
            <div className="flex p-2 ">
              <TbPlus size={20} />
              <button>
                <p className="ml-2">ADD CARD</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Layout;
