import React, { useState, useEffect } from "react";
const headerDatails = [
  "We provide high quality materials",
  "Free shiping on all orders over $100",
  `Big summer sale`,
];

export default function Header() {
  const [index, setIndex] = useState(0);
  const [title, setTitle] = useState(headerDatails[index]);

  useEffect(() => {
    setTimeout(() => {
      index < headerDatails.length
        ? setIndex((prevIndex) => prevIndex + 1)
        : setIndex(0);
      setTitle(headerDatails[index] || headerDatails[1]);
    }, 3000);
  }, [index]);

  return (
    <header className="text-xsm py-3 border-b">
      <div
        className="flex sm:justify-between items-center  flex-col sm:flex-row 
         text-[#999999] font-[karla]"
      >
        <div>{title}</div>
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
