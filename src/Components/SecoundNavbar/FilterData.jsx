import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../SubNavbar/Modal";
import MultiRangeSlider from "multi-range-slider-react";
import { PiHouseLineLight, PiWarehouseThin } from "react-icons/pi";
import { MdApartment } from "react-icons/md";
import { LuHotel } from "react-icons/lu";
import {
  addResData,
  fetchresturent,
} from "../../Redux/Features/Resturent/ResturentData";

const FilterData = ({ filterModal, setFiltermodal }) => {
  const { resturetrentData } = useSelector((state) => state.resturentSlice);
  const dispatch = useDispatch();
  const [maxRange, setMaxRange] = useState(0);
  const [minValue, set_minValue] = useState(0);
  const [maxValue, set_maxValue] = useState(0);
  const [filterUpdateData, set_UpdateData] = useState(null);
  const [entirerplace, setEntireplace] = useState(false);
  const [room, setRoom] = useState(false);
  const [sharedroom, setSharedroom] = useState(false);
  const [bedroom, setBedroom] = useState(null);
  const [bed, setBed] = useState(null);
  const [bathrooms, setBathrooms] = useState(null);
  const [propertyHouse, setpropertyHouse] = useState(false);
  const [propertyApertment, setpropertyApertment] = useState(false);
  const [propertyGuestHouse, setpropertyGuestHouse] = useState(false);
  const [propertyHotel, setpropertyHotel] = useState(false);

  // Modal filter function is here
  useEffect(() => {
    if (resturetrentData) {
      const maxPrice = Math.max(
        ...resturetrentData?.map((obj) => obj.pricePerNight)
      );
      const minPrice = Math.min(
        ...resturetrentData?.map((obj) => obj.pricePerNight)
      );
      set_maxValue(maxPrice);
      set_minValue(minPrice);
      setMaxRange(maxPrice);
    }
  }, [resturetrentData]);

  // filter modal data function is here
  useEffect(() => {
    const requestData = {
      minValue,
      maxValue,
      entirerplace,
      room,
      sharedroom,
      bedroom,
      bed,
      bathrooms,
      propertyHouse,
      propertyApertment,
      propertyGuestHouse,
      propertyHotel,
    };

    fetch("http://localhost:5000/filterModalData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((res) => res.json())
      .then((data) => set_UpdateData(data));
  }, [
    resturetrentData,
    minValue,
    maxValue,
    entirerplace,
    room,
    sharedroom,
    bedroom,
    bed,
    bathrooms,
    propertyHouse,
    propertyApertment,
    propertyGuestHouse,
    propertyHotel,
  ]);

  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  // clear all function is here
  const clearallfunction = () => {
    dispatch(fetchresturent());
    set_minValue(0);
    set_UpdateData(resturetrentData);
    setEntireplace(false);
    setRoom(false);
    setSharedroom(false);
    setBedroom(null)
    setBed(null);
    setBathrooms(null);
    setpropertyHouse(false);
    setpropertyApertment(false);
    setpropertyGuestHouse(false);
    setpropertyHotel(false);
    set_maxValue(resturetrentData.length);
  };

  return (
    <>
      <Modal isOpen={filterModal} setIsOpen={setFiltermodal} Title="Filters">
        <div className="overflow-y-auto h-[calc(100vh-200px)] min-h-[300px]">
          <div className="font-Inter border-b pb-10 my-5">
            <h1 className="font-bold">Price range</h1>
            <p className="text-sm">The avarage nightly price is $91</p>
            <div className="my-5">
              <MultiRangeSlider
                min={0}
                max={maxRange}
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
                <input
                  onClick={() => {
                    setEntireplace(!entirerplace);
                  }}
                  checked={entirerplace}
                  className="w-8 h-10"
                  type="checkbox"
                  name=""
                  id=""
                />
                <div>
                  <h1 className="font-Mooli text-lg">Entire Place</h1>
                  <p className="text-sm font-thin">A place al to yourself</p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-3">
                <input
                  onClick={() => {
                    setRoom(!room);
                  }}
                  className="w-8 h-10"
                  type="checkbox"
                  checked={room}
                  name=""
                  id=""
                />
                <div>
                  <h1 className="font-Mooli text-lg">Room</h1>
                  <p className="text-sm font-thin">
                    Your own room, plus access to shared spaces
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-3">
                <input
                  onClick={() => setSharedroom(!sharedroom)}
                  className="w-8 h-10"
                  type="checkbox"
                  checked={sharedroom}
                  name=""
                  id=""
                />
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
            <h1 className="font-bold">Room and beds</h1>
            <div className="my-5">
              <h1 className="text-sm">Bedrooms</h1>
              <div className="flex justify-start items-center gap-4 mt-2">
                <button
                  onClick={() => setBedroom(null)}
                  className={`px-5 border py-1 rounded-full ${
                    !bedroom && "bg-black text-white"
                  }`}
                  type="radio"
                  name="bedroom"
                >
                  Any
                </button>
                <button
                  onClick={() => setBedroom(1)}
                  className={`px-5 border py-1 rounded-full ${
                    bedroom == 1 && "bg-black text-white"
                  }`}
                  type="radio"
                  name="bedroom"
                >
                  1
                </button>
                <button
                  onClick={() => setBedroom(2)}
                  className={`px-5 border py-1 rounded-full ${
                    bedroom == 2 && "bg-black text-white"
                  }`}
                  type="radio"
                  name="bedroom"
                >
                  2
                </button>
                <button
                  onClick={() => setBedroom(3)}
                  className={`px-5 border py-1 rounded-full ${
                    bedroom == 3 && "bg-black text-white"
                  }`}
                  type="radio"
                  name="bedroom"
                >
                  3
                </button>
                <button
                  onClick={() => setBedroom(4)}
                  className={`px-5 border py-1 rounded-full ${
                    bedroom == 4 && "bg-black text-white"
                  }`}
                  type="radio"
                  name="bedroom"
                >
                  4
                </button>
                <button
                  onClick={() => setBedroom(5)}
                  className={`px-5 border py-1 rounded-full ${
                    bedroom == 5 && "bg-black text-white"
                  }`}
                  type="radio"
                  name="bedroom"
                >
                  5
                </button>
                <button
                  onClick={() => setBedroom(6)}
                  className={`px-5 border py-1 rounded-full ${
                    bedroom == 6 && "bg-black text-white"
                  }`}
                  type="radio"
                  name="bedroom"
                >
                  6
                </button>
                <button
                  onClick={() => setBedroom(7)}
                  className={`px-5 border py-1 rounded-full ${
                    bedroom == 7 && "bg-black text-white"
                  }`}
                  type="radio"
                  name="bedroom"
                >
                  7
                </button>
                <button
                  onClick={() => setBedroom(8)}
                  className={`px-5 border py-1 rounded-full ${
                    bedroom >= 8 && "bg-black text-white"
                  }`}
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
                  onClick={() => setBed(null)}
                  className={`px-5 border py-1 rounded-full ${
                    !bed && "bg-black text-white"
                  }`}
                  type="radio"
                  name="bedroom"
                >
                  Any
                </button>
                <button
                  onClick={() => setBed(1)}
                  className={`px-5 border py-1 rounded-full ${
                    bed == 1 && "bg-black text-white"
                  }`}
                  type="radio"
                  name="bedroom"
                >
                  1
                </button>
                <button
                  onClick={() => setBed(2)}
                  className={`px-5 border py-1 rounded-full ${
                    bed == 2 && "bg-black text-white"
                  }`}
                  type="radio"
                  name="bedroom"
                >
                  2
                </button>
                <button
                  onClick={() => setBed(3)}
                  className={`px-5 border py-1 rounded-full ${
                    bed == 3 && "bg-black text-white"
                  }`}
                  type="radio"
                  name="bedroom"
                >
                  3
                </button>
                <button
                  onClick={() => setBed(4)}
                  className={`px-5 border py-1 rounded-full ${
                    bed == 4 && "bg-black text-white"
                  }`}
                  type="radio"
                  name="bedroom"
                >
                  4
                </button>
                <button
                  onClick={() => setBed(5)}
                  className={`px-5 border py-1 rounded-full ${
                    bed == 5 && "bg-black text-white"
                  }`}
                  type="radio"
                  name="bedroom"
                >
                  5
                </button>
                <button
                  onClick={() => setBed(6)}
                  className={`px-5 border py-1 rounded-full ${
                    bed == 6 && "bg-black text-white"
                  }`}
                  type="radio"
                  name="bedroom"
                >
                  6
                </button>
                <button
                  onClick={() => setBed(7)}
                  className={`px-5 border py-1 rounded-full ${
                    bed == 7 && "bg-black text-white"
                  }`}
                  type="radio"
                  name="bedroom"
                >
                  7
                </button>
                <button
                  onClick={() => setBed(8)}
                  className={`px-5 border py-1 rounded-full ${
                    bed == 8 && "bg-black text-white"
                  }`}
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
                  onClick={() => setBathrooms(null)}
                  className={`px-5 border py-1 rounded-full ${
                    !bathrooms && "bg-black text-white"
                  }`}
                  type="radio"
                  name="bedroom"
                >
                  Any
                </button>
                <button
                  onClick={() => setBathrooms(1)}
                  className={`px-5 border py-1 rounded-full ${
                    bathrooms == 1 && "bg-black text-white"
                  }`}
                  type="radio"
                  name="bedroom"
                >
                  1
                </button>
                <button
                  onClick={() => setBathrooms(2)}
                  className={`px-5 border py-1 rounded-full ${
                    bathrooms == 2 && "bg-black text-white"
                  }`}
                  type="radio"
                  name="bedroom"
                >
                  2
                </button>
                <button
                  onClick={() => setBathrooms(3)}
                  className={`px-5 border py-1 rounded-full ${
                    bathrooms == 3 && "bg-black text-white"
                  }`}
                  type="radio"
                  name="bedroom"
                >
                  3
                </button>
                <button
                  onClick={() => setBathrooms(4)}
                  className={`px-5 border py-1 rounded-full ${
                    bathrooms == 4 && "bg-black text-white"
                  }`}
                  type="radio"
                  name="bedroom"
                >
                  4
                </button>
                <button
                  onClick={() => setBathrooms(5)}
                  className={`px-5 border py-1 rounded-full ${
                    bathrooms == 5 && "bg-black text-white"
                  }`}
                  type="radio"
                  name="bedroom"
                >
                  5
                </button>
                <button
                  onClick={() => setBathrooms(6)}
                  className={`px-5 border py-1 rounded-full ${
                    bathrooms == 6 && "bg-black text-white"
                  }`}
                  type="radio"
                  name="bedroom"
                >
                  6
                </button>
                <button
                  onClick={() => setBathrooms(7)}
                  className={`px-5 border py-1 rounded-full ${
                    bathrooms == 7 && "bg-black text-white"
                  }`}
                  type="radio"
                  name="bedroom"
                >
                  7
                </button>
                <button
                  onClick={() => setBathrooms(8)}
                  className={`px-5 border py-1 rounded-full ${
                    bathrooms == 8 && "bg-black text-white"
                  }`}
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
              <button
                onClick={() => setpropertyHouse(!propertyHouse)}
                className={`py-5 w-40 border rounded-md flex flex-col justify-center items-center gap-5 ${
                  propertyHouse && "border-2 border-black"
                }`}
              >
                <PiHouseLineLight className="text-5xl" />
                <h1>House</h1>
              </button>
              <button
                onClick={() => setpropertyApertment(!propertyApertment)}
                className={`py-5 border w-40 rounded-md flex flex-col justify-center items-center gap-5 ${
                  propertyApertment && "border-2 border-black"
                }`}
              >
                <MdApartment className="text-5xl" />
                <h1>Apartment</h1>
              </button>
              <button
                onClick={() => setpropertyGuestHouse(!propertyGuestHouse)}
                className={`py-5 border w-40 rounded-md flex flex-col justify-center items-center gap-5 ${
                  propertyGuestHouse && "border-2 border-black"
                }`}
              >
                <PiWarehouseThin className="text-5xl" />
                <h1>Guesthouse</h1>
              </button>
              <button
                onClick={() => setpropertyHotel(!propertyHotel)}
                className={`py-5 border w-40 rounded-md flex flex-col justify-center items-center gap-5 ${
                  propertyHotel && "border-2 border-black"
                }`}
              >
                <LuHotel className="text-5xl" />
                <h1>Hotel</h1>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center sticky bottom-0 z-40 border-t pt-5">
          <button onClick={()=>clearallfunction()} className="font-bold underline">Clear all</button>
          <button
            onClick={() => {
              dispatch(addResData(filterUpdateData));
            }}
            className="px-5 py-2 text-white bg-black rounded-full font-Inter tracking-tighter"
          >
            Show {filterUpdateData?.length} Stays
          </button>
        </div>
      </Modal>
    </>
  );
};

export default FilterData;
