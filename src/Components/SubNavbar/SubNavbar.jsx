import React, { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const SubNavbar = () => {
  const [where, setWhere] = useState(false);
  const [checkin, setCheckin] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const [who, setWho] = useState(false);
  const [country, setCountry] = useState("Search destinations");
  const [guest, setGuest] = useState("Add");
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handlechangedate = (event) => {
    setDate(event.selection);
  };

  // totol guest funtion is here
  useEffect(() => {
    const totalGuests = adults + children + infants + pets;
    setGuest(totalGuests);
  }, [adults, children, infants, pets]);

  return (
    <>
      <div
        className={`border w-fit mx-auto font-Inter z-20 ${
          where | checkin | checkout | who && "bg-gray-200"
        } rounded-full border-gray-300 my-5`}
      >
        <div className="flex justify-center items-center gap-2">
          {/* first section is here */}
          <div
            onClick={() => {
              setWhere(!where),
                setCheckin(false),
                setCheckout(false),
                setWho(false);
            }}
            className={`px-10 py-3 cursor-pointer relative rounded-full w-fit ${
              where && "bg-white"
            }`}
          >
            <h1 className="font-bold">Where</h1>
            <input className="border-none text-sm text-gray-500 outline-none bg-transparent" onChange={(e)=>setCountry(e.target.value)} type="text" placeholder={country} />
            {/* toggle is here */}
            <div
              hidden={!where}
              className="w-96 z-30 absolute border p-5 transition-opacity bg-white shadow-md top-20 rounded-md"
            >
              <h1 className="font-bold font-Inter mb-5 border-b pb-2">
                Search your region
              </h1>
              {/* body start from here */}
              <div className="w-full grid-cols-3 justify-between items-center gap-3 grid">
                <label
                  onClick={() => setCountry("all")}
                  className="text-start font-Inter text-sm"
                >
                  <img
                    className="w-full h-auto rounded-md border shadow-md mb-2"
                    src="https://a0.muscache.com/im/pictures/d77de9f5-5318-4571-88c7-e97d2355d20a.jpg?im_w=320"
                    alt=""
                  />
                  <span className="text-xs">I am Flexiable</span>
                </label>
                <label
                  onClick={() => {setCountry("Bangladesh")}}
                  className="text-start font-Inter text-sm"
                >
                  <img
                    className="w-full rounded-md border shadow-md mb-2"
                    src="https://a0.muscache.com/im/pictures/d77de9f5-5318-4571-88c7-e97d2355d20a.jpg?im_w=320"
                    alt=""
                  />
                  <span className="text-xs">Bangladesh</span>
                </label>
              </div>
            </div>
          </div>
          {/* secound date picker part */}
          <div
            onClick={() => {
              setWhere(false),
                setCheckin(!checkin),
                setCheckout(false),
                setWho(false);
            }}
            className={`px-10 rounded-full text-sm tracking-tighter cursor-pointer ${
              checkin && "bg-white"
            } py-3 relative`}
          >
            <h1 className="font-bold">Check in</h1>
            <p className="text-sm text-gray-500">
              {format(date.startDate, "MMM,dd,yyyy")}
            </p>
            <div className="absolute top-20 z-30" hidden={!checkin}>
              <DateRangePicker
                ranges={[date]}
                onChange={handlechangedate}
                minDate={new Date()}
              />
            </div>
          </div>
          {/* third date picker part */}
          <div
            onClick={() => {
              setWhere(false),
                setCheckin(false),
                setCheckout(!checkout),
                setWho(false);
            }}
            className={`px-10 rounded-full text-sm tracking-tighter cursor-pointer ${
              checkout && "bg-white"
            } py-3 relative`}
          >
            <h1 className="font-bold">Check out</h1>
            <p className="text-sm text-gray-500">
              {format(date.endDate, "MMM,dd,yyyy")}
            </p>
            <div className="absolute top-20 z-30" hidden={!checkout}>
              <DateRangePicker
                ranges={[date]}
                onChange={handlechangedate}
                minDate={new Date()}
              />
            </div>
          </div>
          {/* Four who section is here */}
          <div
            onClick={() => {
              setWhere(false),
                setCheckin(false),
                setCheckout(false),
                setWho(!who);
            }}
            className={`px-10 py-3 cursor-pointer relative rounded-full w-fit ${
              who && "bg-white"
            }`}
          >
            <h1 className="font-bold">Who</h1>
            <p className="text-sm text-gray-500">{guest} guests</p>
            {/* toggle is here */}
            <div
              hidden={!who}
              className="w-96 absolute border p-5 transition-opacity z-40 bg-white shadow-md top-20 rounded-md"
            >
              {/* body start from here */}
              <div className="w-full grid-cols-1 justify-between bg-white items-center gap-3 grid">
                <div className="w-80 border-b py-5">
                  <div className="w-80 flex justify-between items-center">
                    <label className="w-full text-lg font-bold tracking-tighter font-Inter">
                      <h1>Adult</h1>
                      <h6 className="text-xs font-Mooli font-normal text-gray-500">
                        Age 13 or above
                      </h6>
                    </label>
                    <div className="w-full flex justify-center items-center gap-3">
                      <button
                        className="border p-3 rounded-full"
                        onClick={(e) => {
                          adults > 0 && setAdults(adults - 1),
                            e.stopPropagation();
                        }}
                      >
                        <AiOutlineMinus />
                      </button>
                      {adults}
                      <button
                        className="border p-3 rounded-full"
                        onClick={(e) => {
                          adults < 20 && setAdults(adults + 1),
                            e.stopPropagation();
                        }}
                      >
                        <AiOutlinePlus />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-80 border-b py-5">
                  <div className="w-80 flex justify-between items-center">
                    <label className="w-full text-lg font-bold tracking-tighter font-Inter">
                      <h1>Children</h1>
                      <h6 className="text-xs font-Mooli font-normal text-gray-500">
                        Age 2-12
                      </h6>
                    </label>
                    <div className="w-full flex justify-center items-center gap-3">
                      <button
                        className="border p-3 rounded-full"
                        onClick={(e) => {
                          children > 0 && setChildren(children - 1),
                            e.stopPropagation();
                        }}
                      >
                        <AiOutlineMinus />
                      </button>
                      {children}
                      <button
                        className="border p-3 rounded-full"
                        onClick={(e) => {
                          children < 10 && setChildren(children + 1),
                            e.stopPropagation();
                        }}
                      >
                        <AiOutlinePlus />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-80 border-b py-5">
                  <div className="w-80 flex justify-between items-center">
                    <label className="w-full text-lg font-bold tracking-tighter font-Inter">
                      <h1>Infants</h1>
                      <h6 className="text-xs font-Mooli font-normal text-gray-500">
                        Under 2
                      </h6>
                    </label>
                    <div className="w-full flex justify-center items-center gap-3">
                      <button
                        className="border p-3 rounded-full"
                        onClick={(e) => {
                          infants > 0 && setInfants(infants - 1),
                            e.stopPropagation();
                        }}
                      >
                        <AiOutlineMinus />
                      </button>
                      {infants}
                      <button
                        className="border p-3 rounded-full"
                        onClick={(e) => {
                          infants < 2 && setInfants(infants + 1),
                            e.stopPropagation();
                        }}
                      >
                        <AiOutlinePlus />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-80 py-5">
                  <div className="w-80 flex justify-between items-center">
                    <label className="w-full text-lg font-bold tracking-tighter font-Inter">
                      <h1>Pets</h1>
                      <h6 className="text-xs font-Mooli font-normal underline text-gray-500">
                        Bringing a service animal?
                      </h6>
                    </label>
                    <div className="w-full flex justify-center items-center gap-3">
                      <button
                        className="border p-3 rounded-full"
                        onClick={(e) => {
                          pets > 0 && setPets(pets - 1), e.stopPropagation();
                        }}
                      >
                        <AiOutlineMinus />
                      </button>
                      {pets}
                      <button
                        className="border p-3 rounded-full"
                        onClick={(e) => {
                          pets < 5 && setPets(pets + 1), e.stopPropagation();
                        }}
                      >
                        <AiOutlinePlus />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* search button submit part */}
          <button
            onClick={() => {
              setWhere(false),
                setCheckin(false),
                setCheckout(false),
                setWho(false);
            }}
            className="px-5 bg-red-500 text-white mr-3 py-2 rounded-full flex justify-center items-center gap-2"
          >
            <BiSearchAlt2 className="text-lg" />
            <span>Search</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default SubNavbar;
