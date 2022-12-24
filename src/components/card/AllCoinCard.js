import React from "react";

export default function AllCoinCard({ coinItems }) {
  return (
      <div className="rounded-xl shadow-lg bg-[#7D30F5]">
        <h5 className="text-white text-lg font-medium py-5">
          {coinItems?.name}<span> ({coinItems?.symbol})</span>
        </h5>
        {/* <img src={item?.symbol} alt={item?.name} className="h-10 aspect-square object-fit" /> */}
    </div>
  );
}
