import React from 'react';

import {AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import {BsFillBarChartFill} from "react-icons/bs"
import {BiCoin} from "react-icons/bi"
import {GiHamburgerMenu} from "react-icons/gi"




const { useState } = React

const Sidebar = () => {
 
  let topMenuItems =[
    {
      name: "Collaspe",
      iconName: <AiOutlineMenu  color='#3F6EFF'/>,
      iconClose: <AiOutlineClose color='#fff'/>
    },
  ]
  let menuItems = [
   
    {
      name: "Home",
      iconName: <GiHamburgerMenu  color='#fff'/>,
      
    },
    {
      name: "Explore Trends",
      iconName: <BsFillBarChartFill color='#3F6EFF' type='solid'/>,
    
    },
    {
      name: "Coin Messages",
      iconName: <BiCoin color='#3F6EFF'/>,
     
    },
 
  ];
  
 
  const [expanded, setExpanded] = useState(false);
  
  return (
    <>
    <div>
      <div className={`topSideBar ${expanded && "expanded"}`}>
          {topMenuItems.map((item, index) => {
            return(
              <div  className={` ${
                expanded && ""
              }`}
              onClick={() => {
                
                if (index === 0) {
                  setExpanded(!expanded);
                }
              }}
              key={index}>
                <span
                className={`flex justify-center bg-[#241F2A] rounded-xl p-5
              ${expanded && ""}`}
              >
                <>
                  {!expanded ? (
                    <>{item.iconName}</>
                  ): (
                    <>{item.iconClose}</>
                  )}
                </>
              </span>
              </div>
            )
          } 
        )}  
      </div>
      <div className={`sidebar rounded-lg mx-5 my-3 pt-5 ${expanded && "expanded"}`}>
        {menuItems.map((item, index) => {
          return (
            <div
              className={`mb-4 flex justify-center ${
                expanded && "expanded-boxicon-container"
              }`}
          
              onClick={() => {
                
                if (index === 0) {
                  setExpanded(!expanded);
                }
              }}
              key={index}
            >
              <div
                className={`flex justify-center items-center rounded-xl mt-2 p-3 border-2 text-white
              ${expanded && 'w-full border-none p-1' }`}>
                <>
                  {!expanded ? (
                    <>{item.iconName}</>
                  ): (
                    <>{item.name}</>
                  )}
                </>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </>  
  );
}



export default Sidebar