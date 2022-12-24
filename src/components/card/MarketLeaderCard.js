import React from "react";
import { CoinCard } from '../index'

export default function MarketLeaderCard({coinItems}) {
  return (
    <div className="bg-[#241F2A] h-fit p-3 px-5 w-full rounded-lg mb-5">
      <h1 className="text-[26px] font-bold text-white p-2 px-4">
        Market Leader
      </h1>
        {coinItems.map((item) => (
          <>
            <CoinCard key={item.id} item={item} />
          </>
        ))}
    </div>
  );
}
