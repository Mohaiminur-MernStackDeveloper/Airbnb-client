import React from "react";
import SwiperCatefory from "./SwiperCatefory";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { changestate } from "../../Redux/Features/TaxState/isTax";
import FilterData from "./FilterData";

const SecoundNavbar = () => {
  const dispatch = useDispatch();
  const [enabled, setEnabled] = useState(false);
  const [filterModal, setFiltermodal] = useState(false);
  const [minValue, set_minValue] = useState(0);
  const [maxValue, set_maxValue] = useState(0);
  const [mediumScreen, setMediumScreen] = useState(
    window.innerWidth < 764 ? true : false
  );
  const [smallScreen, setSmallScreen] = useState(
    window.innerWidth < 500 ? true : false
  );

  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  function monitorScreenWidth() {
    let screenWidth = window.innerWidth;
    function checkScreenWidth() {
      const newScreenWidth = window.innerWidth;
      if (newScreenWidth !== screenWidth) {
        if (screenWidth < 764) {
          setMediumScreen(true);
        } else if (screenWidth < 500) {
          setSmallScreen(true);
        } else {
          setSmallScreen(false);
          setMediumScreen(false);
        }
      }
    }
    window.addEventListener("resize", checkScreenWidth);
    return function stopMonitoring() {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }
  const stopMonitoring = monitorScreenWidth();

  // filter by price range function is here

  return (
    <>
      <div className="w-11/12 z-10 py-5 mx-auto flex justify-between items-center lg:flex-nowrap flex-wrap gap-5 relative">
        {/* category silder is from here */}
        <div className="md:w-8/12 w-full">
          <SwiperCatefory />
        </div>
        {/* filter button is here */}
        {!smallScreen && (
          <div
            onClick={() => setFiltermodal(!filterModal)}
            className="w-fit px-5 mx-auto flex justify-center items-center gap-2 cursor-pointer rounded-md tracking-tighter shadow-sm z-10 py-2 border text-center"
          >
            <TbAdjustmentsHorizontal />
            Filter
          </div>
        )}
        {/* Tax before switch is here */}
        {!mediumScreen && (
          <div className="w-full">
            <button
              onClick={() => setEnabled(!enabled)}
              className="w-fit mx-auto py-2 px-5 flex justify-center items-center rounded-md shadow-sm gap-4 border z-10"
            >
              <span>Display total before Taxes</span>
              <Switch
                onClick={dispatch(changestate(enabled))}
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
        )}
      </div>
      <FilterData maxValue={maxValue} minValue={minValue} filterModal={filterModal} setFiltermodal={setFiltermodal} handleInput={handleInput}/>
    </>
  );
};

export default SecoundNavbar;
