import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useSelector } from "react-redux";

const ResturentSingleCard = ({ data }) => {
  const { tax } = useSelector((state) => state.isTax);
  return (
    <div className="font-Inter">
      <img className="w-full h-56 rounded-lg" src={data?.image} alt="" />
      <div className="flex mt-3 justify-center items-start gap-3">
        <h1 className="tracking-tighter font-bold">{data?.description}</h1>
        <h1 className="flex justify-center items-center gap-1">
          <AiFillStar /> {data?.rating}
        </h1>
      </div>
      <h2 className="text-sm mt-1 font-semibold">
        {data?.city} {data?.country}
      </h2>
      <h2 className="text-sm mt-1">{data?.distrance}</h2>
      <h3 className="text-sm mt-1">
        <span className="font-bold">
          ${tax ? data?.pricePerNight : data?.pricePerNight + data?.tax}
        </span>{" "}
        night
      </h3>
    </div>
  );
};

export default ResturentSingleCard;
