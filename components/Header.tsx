import Link from "next/link";
import { BsReverseLayoutSidebarReverse } from "react-icons/bs";

const Header = () => {
  return (
    <div className="flex flex-wrap items-center justify-between">
      <div className="flex-start justify-around mt-4">
        <Link href="/projects">Projects</Link>
        <span className="mx-1">&gt;</span>
        <Link href="/cloud-platform">Cloud Platform</Link>
        <span className="mx-1">&gt;</span>
        <Link href="/flyte">FLYTE</Link>
      </div>

      <div className="flex mt-2 mr-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
            </svg>
          </div>
          <input
            className="form-input py-2 pl-10 pr-5 w-40 h-8 rounded-md text-gray-700 leading-5 bg-gray-200 placeholder-gray-500 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out"
            placeholder="Search"
            type="search"
          />
        </div>
        <div className=" flex ml-3 border rounded-lg items-center p-1">
          <BsReverseLayoutSidebarReverse size={20} />
        </div>
      </div>
    </div>
  );
};

export default Header;