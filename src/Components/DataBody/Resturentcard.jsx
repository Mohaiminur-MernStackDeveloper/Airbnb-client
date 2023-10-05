import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchresturent } from "../../Redux/Features/Resturent/ResturentData";
import ResturentSingleCard from "./ResturentSingleCard";

const Resturentcard = () => {
  const { resturetrentData } = useSelector((state) => state.resturentSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchresturent());
  }, []);

  return (
    <div className="w-11/12 mx-auto grid grid-cols-5 gap-5 justify-center items-start">
      {resturetrentData &&
        resturetrentData.map((data, index) => (
          <ResturentSingleCard key={index} data={data} />
        ))}
    </div>
  );
};

export default Resturentcard;
