import { Sidebar, Card, MarketLeaderCard, AllCoinCard } from "../../components";
import React, { useState, useEffect } from "react";
import apiClient from "../../utils/api-calls/get-coin-list";
import "./index.css";

const Home = () => {
  const [getResult, setGetResult] = useState([]);

  async function getAllData() {
    try {
      const res = await apiClient.get("/coins/list?limit=10");

      const result = {
        status: res.status,
        headers: res.headers,
        data: res.data,
      };

      setGetResult(result.data);

      console.log(result);
      console.log(result.data);
    } catch (err) {
      setGetResult(err.response?.data || err);
    }
  }

  useEffect(() => {
    getAllData();
  }, []);

  const items = [
    {
      id: 1,
      heading: "Token 2345 london",
      text: "Some quick example text to build on the card title and make up the bulk of the card content",
    },
    {
      id: 2,
      heading: "Token 90954 london",
      text: "Some quick example text to build on the card title and make up the bulk of the card content",
    },
    {
      id: 3,
      heading: "Token 8457 london",
      text: "Some quick example text to build on the card title and make up the bulk of the card content",
    },
  ];

  const coinItems = [
    {
      id: 1,
      coinType: "Bitcoin(BTC)",
      coinPrice: 150000,
    },
    {
      id: 2,
      coinType: "Etherum(ETH)",
      coinPrice: 137000,
    },
    {
      id: 2,
      coinType: "Solona(SOL)",
      coinPrice: 137000,
    },
  ];

  return (
    <>
      <div className="h-screen mx-auto my-10 flex justify-center">
        <Sidebar className="sideBar" />
        <div className="w-full">
          <div>
            <div class="relative w-10/12">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-4 pl-10 text-sm text-gray-900 bg-transparent border-2 rounded-lg border-gray-600 placeholder-gray-400  focus:outline-none"
                placeholder="Search Mockups"
                required
              />
            </div>
          </div>
          <div className="flex justify-between mt-3">
            <div className="w-full">
              <MarketLeaderCard coinItems={coinItems} />

              <div className="bg-[#241F2A] h-auto p-3 px-5 my-5 w-full rounded-lg ">
                <h1 className="text-[26px] font-bold text-white px-4 py-3">
                  All Coin
                </h1>
                <div className="grid grid-cols-4 gap-4 text-center">
                  {getResult.slice(1, 8).map((item) => (
                    <AllCoinCard coinItems={item} />
                  ))}
                </div>
              </div>
            </div>
            <div className="card-container rounded-2xl">
              <h1 className="text-[16px] font-bold text-white p-2 px-4">
                Event
              </h1>
              {items.map((item) => (
                <>
                  <Card key={item.id} item={item} />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
