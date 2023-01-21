import Link from "next/link";
import { GiBasketballBall } from "react-icons/gi";
import { TbBrandOpenSource, TbCup, TbPlus } from "react-icons/tb";
import { SiBuymeacoffee } from "react-icons/si";
import Image from "next/image";

const Sidebar = ({ children }) => {
  return (
    <div className="flex">
      <div className="fixed p-3 h-screen w-14 bg-white border-r-[1px] border-solid border-gray-50 flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <Link href="/">
            <Image width={23} height="31" src={"/images/logoMark.png"} alt="" />
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-1"></span>
          <Link href="/projects">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-2 p-2 rounded-lg inline-block border-2">
              <Image width={20} height="20" src={"/images/Vector.svg"} alt="" />
            </div>
          </Link>
          <Link href="/todo">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-2 p-2 rounded-lg inline-block border-2">
              <GiBasketballBall
                size={20}
                style={{ color: "#C32361", fontSize: "2em" }}
              />
            </div>
          </Link>
          <Link href="/buy">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-2  rounded-lg inline-block">
              <SiBuymeacoffee size={20} />
            </div>
          </Link>
          <Link href="/orders">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4  p-2 rounded-lg flex items-center">
            <Image width={20} height="20" src={"/images/Shape-1.svg"} alt="" />
            <Image width={20} height="20" src={"/images/Shape-2.svg"} alt="" />
            </div>
          </Link>
          <Link href="/orders">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-2  rounded-lg inline-block">
              <TbPlus size={20} />
            </div>
          </Link>
        </div>
      </div>
      <main className="ml-14 w-full">{children}</main>
    </div>
  );
};

export default Sidebar;
