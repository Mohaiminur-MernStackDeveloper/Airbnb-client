import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { BiRestaurant, BiSolidCity, BiBuildings } from "react-icons/bi";
import { GiVillage, GiWorld } from "react-icons/gi";
import { TbBeachOff } from "react-icons/tb";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addResData } from "../../Redux/Features/Resturent/ResturentData";

const SwiperCatefory = () => {
  const [category, setCategory] = useState("all");
  const [isSmallScreen, setSmallScreen] = useState(
    window.innerWidth < 450 ? true : false
  );
  const dispatch = useDispatch();

  // filter data by category function is here
  useEffect(() => {
    if (category == "all") {
      fetch("https://airbnbserver-edlktpjdf-developermmr.vercel.app/alldata")
        .then((res) => res.json())
        .then((data) => dispatch(addResData(data)));
    } else if (category == "iconiccities") {
      fetch("https://airbnbserver-edlktpjdf-developermmr.vercel.app/iconiccities")
        .then((res) => res.json())
        .then((data) => dispatch(addResData(data)));
    } else if (category == "countryside") {
      fetch("https://airbnbserver-edlktpjdf-developermmr.vercel.app/countryside")
        .then((res) => res.json())
        .then((data) => dispatch(addResData(data)));
    } else if (category == "topoftheworld") {
      fetch("https://airbnbserver-edlktpjdf-developermmr.vercel.app/topoftheworld")
        .then((res) => res.json())
        .then((data) => dispatch(addResData(data)));
    } else if (category == "beach") {
      fetch("https://airbnbserver-edlktpjdf-developermmr.vercel.app/beach")
        .then((res) => res.json())
        .then((data) => dispatch(addResData(data)));
    } else if (category == "luxe") {
      fetch("https://airbnbserver-edlktpjdf-developermmr.vercel.app/luxe")
        .then((res) => res.json())
        .then((data) => dispatch(addResData(data)));
    }
  }, [category]);

  return (
    <div className="flex justify-center items-center gap-5">
      <button className="prev p-2 shadow-sm border rounded-full">
        <MdKeyboardArrowLeft />
      </button>
      <Swiper
        slidesPerView={isSmallScreen ? 3 : 4}
        spaceBetween={30}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <button
            onClick={() => setCategory("all")}
            className={`flex flex-col justify-center items-center ${
              category == "all" && " pb-1 border-gray-800 border-b-2"
            }`}
          >
            <BiRestaurant className="text-3xl" />
            <span className="tracking-tighter font-Mooli">All Restaurant</span>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button
            onClick={() => setCategory("iconiccities")}
            className={`flex flex-col justify-center items-center ${
              category == "iconiccities" && "border-b-2 pb-1 border-black"
            }`}
          >
            <BiSolidCity className="text-3xl" />
            <span className="tracking-tighter font-Mooli">Iconic Cities</span>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button
            onClick={() => setCategory("countryside")}
            className={`flex flex-col justify-center items-center ${
              category == "countryside" && "border-b-2 pb-1 border-black"
            }`}
          >
            <GiVillage className="text-3xl" />
            <span className="tracking-tighter font-Mooli">Country Sides</span>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button
            onClick={() => setCategory("topoftheworld")}
            className={`flex flex-col justify-center items-center ${
              category == "topoftheworld" && "border-b-2 pb-1 border-black"
            }`}
          >
            <GiWorld className="text-3xl" />
            <span className="tracking-tighter font-Mooli">
              Top of the World
            </span>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button
            onClick={() => setCategory("beach")}
            className={`flex flex-col justify-center items-center ${
              category == "beach" && "border-b-2 pb-1 border-black"
            }`}
          >
            <TbBeachOff className="text-3xl" />
            <span className="tracking-tighter font-Mooli">Beach</span>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button
            onClick={() => setCategory("luxe")}
            className={`flex flex-col justify-center items-center ${
              category == "luxe" && "border-b-2 pb-1 border-gray-800"
            }`}
          >
            <BiBuildings className="text-3xl" />
            <span className="tracking-tighter font-Mooli">Luxe</span>
          </button>
        </SwiperSlide>
      </Swiper>
      <button className="next p-2 shadow-sm border rounded-full">
        <MdKeyboardArrowRight />
      </button>
    </div>
  );
};

export default SwiperCatefory;
