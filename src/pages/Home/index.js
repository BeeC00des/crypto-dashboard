import { Sidebar, Card, MarketLeaderCard, AllCoinCard } from "../../components";
import React, { useState, useEffect } from "react";
import apiClient from "../../utils/api-calls/get-coin-list";
import "./index.css";

const Home = () => {
  const [marketData, setMarketData] = useState([]);

  async function getMarketCoinData(){
    try{
      const response = await apiClient.get("/search/trending");

      const responseData={
        status:  response.status,
        headers:  response.headers,
        data:  response.data,
      }

      const trendingCoin = responseData.data.coins;
      console.log(trendingCoin);

      setMarketData(trendingCoin)

    }catch (err) {
      setMarketData(err.response?.data || err);
    }
  }

  useEffect(() => {
    getMarketCoinData()
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

  return (
    <>
      <div className="h-screen mx-auto my-10 flex justify-center">
        <Sidebar className="sideBar" />
        <div className="w-full">
          <div>
            <div className="relative w-10/12">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 bg-transparent border-2 rounded-lg border-gray-600 placeholder-gray-400  focus:outline-none"
                placeholder="Search Mockups"
                required
              />
            </div>
          </div>
          <div className="flex justify-between mt-3">
            <div className="w-full">
              <div className="bg-[#241F2A] h-fit p-3 px-5 w-full rounded-lg mb-5">
              <h1 className="text-[26px] font-bold text-white p-2 px-4">
                Market Leader
              </h1>
              <div className="">
                  {marketData.slice(0, 3).map((item, key) => (
                      <MarketLeaderCard key={key} item={item.item} />
                  ))}
              </div>
              </div>
              <div className="bg-[#241F2A] h-auto p-3 px-5 my-5 w-full rounded-lg ">
                <h1 className="text-[26px] font-bold text-white px-4 py-3">
                  All Coin
                </h1>
                <div className="grid grid-cols-4 gap-4 text-center">
                  {marketData.slice(0, 7).map((item) => (
                    <AllCoinCard key={item.id} coinItems={item.item} />
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
