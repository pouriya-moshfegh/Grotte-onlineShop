import React, { useState, useEffect } from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import { SlDiamond } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";

const headerDetails = [
  <> <SlDiamond className="inline"/> We provide high quality materials</>,
  <> <BsTruck className="inline"/> Free shiping on all orders over $100</>,
 <> <AiFillThunderbolt className="inline"/> Big summer sale</>,
];

export default function Header() {
  const [index, setIndex] = useState(0);
  const [title, setTitle] = useState(headerDetails[index]);

  useEffect(() => {
    setTimeout(() => {
      index < headerDetails.length
        ? setIndex((prevIndex) => prevIndex + 1)
        : setIndex(0);
      setTitle(headerDetails[index] || headerDetails[1]);
    }, 3000);
  }, [index]);

  return (
    <header className="text-xsm py-3 border-b">
      <div
        className="flex sm:justify-between items-center  flex-col sm:flex-row 
         text-[#999999] font-[karla]"
      >
        <p className="duration-200">{title}</p>
        <div className="w-44 flex justify-evenly mt-4 sm:mt-0">
          <a className="hover:text-red-600" href="h#">
            My Account
          </a>
          <a className="hover:text-red-600" href="h#">
            Cart
          </a>
          <a className="hover:text-red-600" href="h#">
            Wishlist
          </a>
        </div>
      </div>
    </header>
  );
}
