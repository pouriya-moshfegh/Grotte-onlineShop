import React, { useState } from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import Actiobox from "./Actiobox";

import "./products.css";
let star = "⭐";
export default function ProductBox({
  img,
  hoverImg,
  title,
  price,
  category,
  rate,
  isOffItem,
}) {
  const [isOff, setIsOff] = useState(isOffItem);
  const [mainImg, setmainImg] = useState(img);
  return (
    <section 
    onMouseEnter={()=>setmainImg(hoverImg||img)}
    onMouseLeave={()=>setmainImg(img)}className="product-box ">
      {/* _____   is new   _______ */}
      {isOff && (
        <span className="sale-box">
          <AiFillThunderbolt className="mx-auto" /> sale!
        </span>
      )}
      {/* ______  img   ______ */}
      <div className="relative max-h-[50vh] sm:max-h-48 w-full overflow-hidden ">
        <img
          className=" sm:h-44 mx-auto object-contain duration-200"
          src={mainImg}
          alt="white coat img"
        />
        {/*____ action box (buttons on hover) ____ */}
        <Actiobox />
      </div>
      <div className="h-4">
        {/* ______   title   ______ */}

        <a href="#" className="sale-title text-primary hover-p ">
          {title}
        </a>
        {/* ______  category    ______ */}

        <a href="#" className="sale-category text-xsm hover-p">
          {category}
        </a>
      </div>
      {/* _____  rate   _______ */}

      <div className="t
      ext-yellow-500 mt-4">
        {/* {star.repeat(rate)} */}
      </div>
      {/* ______  price  ______ */}

      <p className="text-primary text-sm font-thin ">
        {price} $
        {isOff && (
          <span className="text-xsm text-black/30 line-through"> $ 225.00</span>
        )}
      </p>
    </section>
  );
}
