import Link from "next/link";
import { BsReverseLayoutSidebarReverse } from "react-icons/bs";

const Header = () => {
  return (
    <div className="flex  items-center justify-between ">
      <div className="flex justify-start mt-4">
        <Link href="/projects">
          <h2 style={{
            fontFamily: 'GT Walsheim',
            color: '#282A2F',
            fontWeight: '500',
            fontSize: '14px',
            lineHeight: '20px',
            letterSpacing: '0.2px',
            fontStyle: 'normal'
          }} >Projects</h2>
</Link>
        <span style={{
            fontFamily: 'GT Walsheim',
            color: '#282A2F',
            fontWeight: '500',
            fontSize: '14px',
            lineHeight: '20px',
            letterSpacing: '0.2px',
            fontStyle: 'normal'}} className="mx-1">&gt;</span>
        <Link href="/cloud-platform">
        <h2 style={{
            fontFamily: 'GT Walsheim',
            color: '#6C6F75',
            fontWeight: '500',
            fontSize: '14px',
            lineHeight: '20px',
            letterSpacing: '0.2px',
            fontStyle: 'normal'
          }} >Cloud Platform</h2>
        </Link>
        <div className="flex bg-gray-200 items-center ml-2 rounded-sm ">
          <Link href="/flyte">
          <h2 style={{
            fontFamily: 'GT Walsheim',
            color: '#6C6F75',
            fontWeight: '500',
            fontSize: '14px',
            lineHeight: '20px',
            letterSpacing: '0.2px',
            fontStyle: 'normal'
          }} >FLYTE</h2>
          </Link>
        </div>
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

// style={{ 
//   width:" 52px",
//   height: "20px",
//   font-family: 'GT Walsheim',
//   font-style: 'normal',
//   font-weight: '500',
//   font-size: '14px',
//   line-height: '20px',
//   letter-spacing: '0.2px',
//   color: '#282A2F'
// }}