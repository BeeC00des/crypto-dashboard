import React from "react";

export default function AllCoinCard({ coinItems }) {
  return (
      <div className="rounded-xl shadow-lg bg-[#7D30F5] flex justify-center items-center">
        <img src={coinItems?.small} alt={coinItems?.name} className="h-10 aspect-square object-fit" />
        <h5 className="text-white text-lg font-medium py-5 pl-3">
          {coinItems?.name}
        </h5>
    </div>
  );
}
