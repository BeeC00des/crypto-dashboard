import { Sidebar, Card, CoinChart} from "../../components";
// import React, { useState } from "react";
// import apiClient from "../../utils/api-calls/get-coin-list";
import "./index.css";

const Home = () => {
//   const [getResult, setGetResult] = useState(null);

//   async function getAllData() {
//     try {
//       const res = await apiClient.get("/coins/list");

//       const result = {
//         status: res.status,
//         headers: res.headers,
//         data: res.data,
//       };

//       setGetResult(result);

//       console.log(result);
//       console.log(result.data);

//     } catch (err) {
//       setGetResult(err.response?.data || err);
//     }
//   }

  const items = [
    {
      id: 1,
      heading: "Description",
      text: "Some quick example text to build on the card title and make up the bulk of the card content",
    },
  ];


  
  return (
    <>
      <div className="h-screen mx-auto my-10 flex justify-center">
        <Sidebar className="sideBar" />
        <div className="w-full">
          <div className="flex justify-between input-container sm:w-auto md:w-full">
            <div className="relative w-8/12">
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
                className="block w-full p-4 pl-10 text-sm text-white border-2 bg-transparent rounded-lg border-gray-600 placeholder-gray-400  focus:outline-none"
                placeholder="Search Mockups"
                required
              />
            </div>
             <div className="w-3/12 flex items-center justify-center">
            <input
                type="search"
                id="default-search"
                className="block w-full p-4 text-sm text-gray-900 bg-[#241F2A] rounded-lg placeholder-gray-400  focus:outline-none"
                placeholder="Search Date"
                required
              />
            </div>
          </div>
         
          <div className="flex justify-between mt-3">
            <div className="w-full">
              <CoinChart />
            </div> 
          
           
            <div className="card-container rounded-2xl">
              <h1 className="text-[18px] font-bold text-white py-3 px-4">
                Info Card
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
