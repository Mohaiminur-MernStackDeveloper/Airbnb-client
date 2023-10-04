import React from "react";
import SwiperCatefory from "./SwiperCatefory";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import Modal from "../SubNavbar/Modal";
import MultiRangeSlider from "multi-range-slider-react";
import { PiHouseLineLight,PiWarehouseThin } from "react-icons/pi";
import { MdApartment } from "react-icons/md";
import { LuHotel } from "react-icons/lu";

const SecoundNavbar = () => {
  const [enabled, setEnabled] = useState(false);
  const [filterModal, setFiltermodal] = useState(true);
  const [minValue, set_minValue] = useState(25);
  const [maxValue, set_maxValue] = useState(75);

  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  return (
    <>
      <div className="w-11/12 z-10 py-5 mx-auto flex justify-between items-center lg:flex-nowrap flex-wrap gap-5 relative">
        {/* category silder is from here */}
        <div className="md:w-8/12 w-full">
          <SwiperCatefory />
        </div>
        {/* filter button is here */}
        <div
          onClick={() => setFiltermodal(!filterModal)}
          className="w-fit px-5 mx-auto flex justify-center items-center gap-2 cursor-pointer rounded-md tracking-tighter shadow-sm py-2 border text-center"
        >
          <TbAdjustmentsHorizontal />
          Filter
        </div>
        {/* Tax before switch is here */}
        <div className="w-full">
          <button
            onClick={() => setEnabled(!enabled)}
            className="w-fit mx-auto py-2 px-5 flex justify-center items-center rounded-md shadow-sm gap-4 border"
          >
            <span>Display total before Taxes</span>
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className={`${enabled ? "bg-black" : "bg-gray-500"}
          relative inline-flex h-[23px] w-[41px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={`${enabled ? "translate-x-5" : "translate-x-0"}
            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
              />
            </Switch>
          </button>
        </div>
      </div>
      {/* Filter Modal is here */}
      <Modal isOpen={filterModal} setIsOpen={setFiltermodal} Title="Filters">
        <div className="overflow-y-auto h-[calc(100vh-200px)] min-h-[300px]">
          <div className="font-Inter border-b pb-10 my-5">
            <h1 className="font-bold">Price range</h1>
            <p className="text-sm">The avarage nightly price is $91</p>
            <div className="my-5">
              <MultiRangeSlider
                min={0}
                max={1000}
                minValue={minValue}
                maxValue={maxValue}
                onInput={(e) => {
                  handleInput(e);
                }}
              />
              <div className="flex justify-center items-center w-10/12 mx-auto gap-5 box-border">
                <div className="w-full relative">
                  <input
                    onChange={(event) => set_minValue(event.target.value)}
                    type="number"
                    className="w-full border px-6 pt-6 py-2 text-lg rounded-md outline-none"
                    value={minValue}
                    name="minprice"
                    id="minprice"
                  />
                  <span className="absolute left-3 font-Raleway top-7">$</span>
                  <span className="absolute left-3 text-gray-500 font-Raleway text-sm top-2">
                    Minimum
                  </span>
                </div>
                -
                <div className="w-full relative">
                  <input
                    onChange={(event) => set_maxValue(event.target.value)}
                    type="number"
                    className="w-full border px-6 py-2 pt-6 text-lg rounded-md outline-none"
                    value={maxValue}
                    name="minprice"
                    id="minprice"
                  />
                  <span className="absolute left-3 font-Raleway top-7">$</span>
                  <span className="absolute left-3 text-gray-500 font-Raleway text-sm top-2">
                    Miximum
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="font-Inter border-b pb-10 my-5">
            <h1 className="font-bold">Type of place</h1>
            <div className="my-5 grid grid-cols-2 gap-5">
              <div className="flex justify-start items-center gap-3">
                <input className="w-8 h-10" type="checkbox" name="" id="" />
                <div>
                  <h1 className="font-Mooli text-lg">Entire Place</h1>
                  <p className="text-sm font-thin">A place al to yourself</p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-3">
                <input className="w-8 h-10" type="checkbox" name="" id="" />
                <div>
                  <h1 className="font-Mooli text-lg">Room</h1>
                  <p className="text-sm font-thin">
                    Your own room, plus access to shared spaces
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-3">
                <input className="w-8 h-10" type="checkbox" name="" id="" />
                <div>
                  <h1 className="font-Mooli text-lg">Shared room</h1>
                  <p className="text-sm font-thin">
                    A sleeping space and common areas that may be shared with
                    others
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="font-Inter border-b pb-10 my-5">
            <h1 className="font-bold">Price range</h1>
            <div className="my-5">
              <h1 className="text-sm">Bedrooms</h1>
              <div className="flex justify-start items-center gap-4 mt-2">
                <button
                  className={`px-5 border py-1 rounded-full`}
                  type="radio"
                  name="bedroom"
                >
                  Any
                </button>
                <button
                  className={`px-5 border py-1 rounded-full`}
                  type="radio"
                  name="bedroom"
                >
                  1
                </button>
                <button
                  className={`px-5 border py-1 rounded-full`}
                  type="radio"
                  name="bedroom"
                >
                  2
                </button>
                <button
                  className={`px-5 border py-1 rounded-full`}
                  type="radio"
                  name="bedroom"
                >
                  3
                </button>
                <button
                  className={`px-5 border py-1 rounded-full`}
                  type="radio"
                  name="bedroom"
                >
                  4
                </button>
                <button
                  className={`px-5 border py-1 rounded-full`}
                  type="radio"
                  name="bedroom"
                >
                  5
                </button>
                <button
                  className={`px-5 border py-1 rounded-full`}
                  type="radio"
                  name="bedroom"
                >
                  6
                </button>
                <button
                  className={`px-5 border py-1 rounded-full`}
                  type="radio"
                  name="bedroom"
                >
                  7
                </button>
                <button
                  className={`px-5 border py-1 rounded-full`}
                  type="radio"
                  name="bedroom"
                >
                  8+
                </button>
              </div>
            </div>
            <div className="my-5">
              <h1 className="text-sm">Bed</h1>
              <div className="flex justify-start items-center gap-4 mt-2">
                <button
                  className={`px-5 border py-1 rounded-full`}
                  type="radio"
                  name="bedroom"
                >
                  Any
                </button>
                <button
                  className={`px-5 border py-1 rounded-full`}
                  type="radio"
                  name="bedroom"
                >
                  1
                </button>
                <button
                  className={`px-5 border py-1 rounded-full`}
                  type="radio"
                  name="bedroom"
                >
                  2
                </button>
                <button
                  className={`px-5 border py-1 rounded-full`}
                  type="radio"
                  name="bedroom"
                >
                  3
                </button>
                <button
                  className={`px-5 border py-1 rounded-full`}
                  type="radio"
                  name="bedroom"
                >
                  4
                </button>
                <button
                  className={`px-5 border py-1 rounded-full`}
                  type="radio"
                  name="bedroom"
                >
                  5
                </button>
                <button
                  className={`px-5 border py-1 rounded-full`}
                  type="radio"
                  name="bedroom"
                >
                  6
                </button>
                <button
                  className={`px-5 border py-1 rounded-full`}
                  type="radio"
                  name="bedroom"
                >
                  7
                </button>
                <button
                  className={`px-5 border py-1 rounded-full`}
                  type="radio"
                  name="bedroom"
                >
                  8+
                </button>
              </div>
            </div>
            <div className="my-5">
              <h1 className="text-sm">Bathrooms</h1>
              <div className="flex justify-start items-center gap-4 mt-2">
                <button
                  className={`px-5 border py-1 rounded-full`}
                  type="radio"
                  name="bedroom"
                >
                  Any
                </button>
                <button
                  className={`px-5 border py-1 rounded-full`}
                  type="radio"
                  name="bedroom"
                >
                  1
                </button>
                <button
                  className={`px-5 border py-1 rounded-full`}
                  type="radio"
                  name="bedroom"
                >
                  2
                </button>
                <button
                  className={`px-5 border py-1 rounded-full`}
                  type="radio"
                  name="bedroom"
                >
                  3
                </button>
                <button
                  className={`px-5 border py-1 rounded-full`}
                  type="radio"
                  name="bedroom"
                >
                  4
                </button>
                <button
                  className={`px-5 border py-1 rounded-full`}
                  type="radio"
                  name="bedroom"
                >
                  5
                </button>
                <button
                  className={`px-5 border py-1 rounded-full`}
                  type="radio"
                  name="bedroom"
                >
                  6
                </button>
                <button
                  className={`px-5 border py-1 rounded-full`}
                  type="radio"
                  name="bedroom"
                >
                  7
                </button>
                <button
                  className={`px-5 border py-1 rounded-full`}
                  type="radio"
                  name="bedroom"
                >
                  8+
                </button>
              </div>
            </div>
          </div>
          <div className="font-Inter my-5">
            <h1 className="font-bold">property Type</h1>
            <div className="flex justify-start gap-5 items-center my-5">
              <button className="py-5 w-40 border rounded-md flex flex-col justify-center items-center gap-5">
                <PiHouseLineLight className="text-5xl" />
                <h1>House</h1>
              </button>
              <button className="py-5 border w-40 rounded-md flex flex-col justify-center items-center gap-5">
                <MdApartment className="text-5xl" />
                <h1>Apartment</h1>
              </button>
              <button className="py-5 border w-40 rounded-md flex flex-col justify-center items-center gap-5">
                <PiWarehouseThin className="text-5xl" />
                <h1>Guesthouse</h1>
              </button>
              <button className="py-5 border w-40 rounded-md flex flex-col justify-center items-center gap-5">
                <LuHotel className="text-5xl" />
                <h1>Hotel</h1>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center sticky bottom-0 z-40 border-t pt-5">
          <button className="font-bold underline">Clear all</button>
          <button className="px-5 py-2 text-white bg-black rounded-full font-Inter tracking-tighter">
            See 664 Toys
          </button>
        </div>
      </Modal>
    </>
  );
};

export default SecoundNavbar;
