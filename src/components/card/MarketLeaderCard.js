import React from "react";
// import { CoinCard } from '../index'

export default function MarketLeaderCard({item}) {

  return (
      <div className="flex justify-between items-center bg-[#7D30F5] w-full rounded-lg p-2 px-4 my-3 py-3">
            <h5 className="text-white text-base font-medium"> {item?.name || "Bee"}</h5>
            <div className="text-white text-sm">
                {item?.price_btc || "$3000"} <span>{item?.symbol  || "usd"}</span> 
            </div>
        </div>
  );
}
