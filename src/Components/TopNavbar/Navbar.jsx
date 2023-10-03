import { BiSearchAlt2 } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";
import UserLogin from "./UserLogin";

const Navbar = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto py-5 flex justify-between items-center font-Inter">
        {/* first section */}
        <div className="invisible sm:visible  flex justify-center items-center">
          <img
            className="w-10 h-10 md:hidden"
            src="https://cdn.iconscout.com/icon/free/png-256/free-airbnb-4-432491.png?f=webp"
            alt="airbnb"
          />
          <img
            className="w-fit h-10 md:visible invisible"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1280px-Airbnb_Logo_B%C3%A9lo.svg.png"
            alt=""
          />
        </div>

        {/* secound section */}
        <button className="flex justify-center items-center border shadow-md px-5 py-2 rounded-full text-xs md:text-base">
          Anywhere <span className="text-gray-300 mx-2">|</span> Any week{" "}
          <span className="text-gray-300 mx-2">|</span>{" "}
          <span className="text-gray-500 mx-2">Add Guests</span>{" "}
          <span className="ps-2 pt-2 pb-1 pe-1 bg-red-500 rounded-full text-white">
            <BiSearchAlt2 className="text-2xl" />
          </span>{" "}
        </button>

        {/* third section start from here */}
        <div className="flex justify-center items-center gap-3">
          <h1 className="font-bold invisible lg:visible">Airbnb your home</h1>
          <TbWorld className="text-2xl invisible md:visible"/>
          <UserLogin />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
