import React from "react";
import { TbCircleDotted, TbDots, TbPlus } from "react-icons/tb";
import FlyteOneCard from "./FlyteOneCard";
import FlyteTwoCard from "./FlyteTwoCard";
import FlyteThreeCard from "./FlyteThreeCard";
import FlyteFourCard from "./FlyteFourCard";
import FlyteFiveCard from "./FlyteFiveCard";
import FlyteSixCard from "./FlyteSixCard";

const Layout = () => {
  return (
    <div className="grid sm:grid-cols-4 grid-cols-1 gap-4">
      {/* Column 1 */}
      <div className="flex justify-between flex-col ">
        <div className="w-full flex-col">
          {/* FLYTE-1 Card */}
          <FlyteOneCard />
          {/* FLYTE-2 Card */}
          <FlyteTwoCard />

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

      {/* Column 2 */}
      <div className="flex justify-between flex-col ">
        <div className="w-full flex-col">
          {/* FLYTE-3 Card */}
          <FlyteThreeCard />

          {/* FLYTE-4 Card */}
          <FlyteFourCard />

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

      {/* Column 3 */}
      <div className="flex justify-between flex-col ">

        <div className="w-full flex-col">
          {/* FLYTE-5 Card */}
          <FlyteFiveCard />

          {/* FLYTE-6 Card */}
          <FlyteSixCard />

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

      {/* Column 4 */}
      <div></div>
    </div>
  );
};

export default Layout;
