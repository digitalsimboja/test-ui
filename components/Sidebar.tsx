import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { GiBasketballBall } from "react-icons/gi"
import { SiBuymeacoffee } from "react-icons/si"
import { TbPlus } from "react-icons/tb"

TbPlus
export const Sidebar = ({ children }) => {
  const [active, setActive] = useState("home");
  return (
    <div className='flex'>
     
      <div className='fixed flex flex-col w-14 h-[982px] p-3  bg-white border-r-[1px'>
        <Link href="#" >
          <Image className=' ' width={23} height={31} src="/images/logoMark.svg" alt=''/>
        </Link>
        <span className='border-b-[1px] border-solid border-[#E9EBEF] top-[54px] w-8 mt-2 items-center left-3'></span>
        <Link
            href="/app"
            className={
              active === "app"
                ? "text-white hover:text-gray-400 active-link"
                : "text-white hover:text-gray-400"
            }
          >
            <div className="bg-gray-100  hover:bg-gray-200 cursor-pointer w-8 h-8 my-2 p-3  rounded-lg inline-block">
              <Image   width={18} height={18} src="/images/projects.svg" alt="" />
            </div>
          </Link>
        
          <Link
            href="/todo"
            className={
              active === "todo"
                ? "text-white hover:text-gray-400 active-link"
                : "text-white hover:text-gray-400"
            }
          >
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer w-8 h-8  my-2 p-2 rounded-lg inline-block">
              {/* <Image
                style={{ color: "#C32361" }}
                width={18}
                height={18}
                src="/images/GiBasketBall.svg"
                alt=""
              /> */}
              <GiBasketballBall size={20} style={{ fill: "#C32361"}} />
            </div>
          </Link>

          <Link
            href="/tip"
            className={
              active === "tip"
                ? "text-white hover:text-gray-400 active-link"
                : "text-white hover:text-gray-400"
            }
          >
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer w-8 h-8  my-2 p-2 rounded-lg inline-block">
              <SiBuymeacoffee style={{ color: "#F5A623 " }} size={20} />
            </div>
          </Link>

          <Link href="/projects">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer w-8 h-8  my-2 p-2  rounded-lg inline-block">
              <div className="relative flex justify-center ">
                <div className="absolute flex items-baseline ">
                  <Image
                    width={20}
                    height="20"
                    src={"/images/Shape-1.svg"}
                    alt=""
                  />
                  <Image
                    width={20}
                    height="20"
                    src={"/images/Shape-2.svg"}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </Link>

          <Link href="/add">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer w-8 h-8  my-2 p-2  rounded-lg inline-block">
              <TbPlus style={{ color: "#533BE5" }} size={16} />
            </div>
          </Link>

          <div
            className={`absolute w-2 bg-custom-color left-0 top-${
              active === "app"
                ? 0
                : active === "todo"
                ? 0
                : active === "tip"
                ? 0
                : active === "projects"
                ? 0
                : active === "add"
                ? 66
                : 0
            } bottom-0`}
          ></div>
        </div>

      <main className="ml-20 w-full">{children}</main>
    </div>
   
  )
}

export default Sidebar;
