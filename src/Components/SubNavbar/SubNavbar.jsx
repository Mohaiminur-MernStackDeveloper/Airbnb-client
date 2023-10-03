import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";

const SubNavbar = ({ open }) => {
  const [focus, setFoucs] = useState(false);
  const [where, setWhere] = useState(false);
  const [checkin, setCheckin] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const [who, setWho] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <div
      hidden={open}
      className={`border w-fit mx-auto flex justify-between items-center font-Inter rounded-full ${where | checkin | checkout | who | search && "bg-[#d6d6d6]" } border-gray-300 my-5`}
    >
      <button
        onClick={() => {
          setWhere(!where),
            setCheckin(false),
            setCheckout(false),
            setSearch(false),
            setWho(false);
        }}
        className={`text-start font-bold md:text-sm text-xs px-10 py-4 rounded-full w-fit ${
          where && "bg-white shadow-md"
        }`}
      >
        Where <br />{" "}
        <span className="font-Raleway font-normal">Search destinations</span>
      </button>
      <button
        onClick={() => {
          setWhere(false),
            setCheckin(!checkin),
            setCheckout(false),
            setSearch(false),
            setWho(false);
        }}
        className={`text-start font-bold md:text-sm text-xs px-10 py-4 rounded-full w-fit ${
          checkin && "bg-white shadow-md"
        }`}
      >
        Check in <br />{" "}
        <span className="font-Raleway font-normal">Add dates</span>
      </button>
      <button
        onClick={() => {
          setWhere(false),
            setCheckin(false),
            setCheckout(!checkout),
            setSearch(false),
            setWho(false);
        }}
        className={`text-start font-bold md:text-sm text-xs px-10 py-4 rounded-full w-fit ${
          checkout && "bg-white shadow-md"
        }`}
      >
        Check out <br />{" "}
        <span className="font-Raleway font-normal">Add dates</span>
      </button>
      <button
        onClick={() => {
          setWhere(false),
            setCheckin(false),
            setCheckout(false),
            setSearch(false),
            setWho(!who);
        }}
        className={`text-start font-bold md:text-sm text-xs px-10 py-4 rounded-full w-fit ${
          who && "bg-white shadow-md"
        }`}
      >
        Who <br /> <span className="font-Raleway font-normal">Add guests</span>
      </button>
      <button
        onClick={() => {
          setWhere(false),
            setCheckin(false),
            setCheckout(false),
            setSearch(!search),
            setWho(false);
        }}
        className="px-8 bg-[#e61e4d] text-white rounded-full flex justify-center items-center py-3 mr-3 gap-3 font-Raleway md:text-lg text-xs"
      >
        <BiSearchAlt2 /> <span>Search</span>
      </button>
    </div>
  );
};

export default SubNavbar;
