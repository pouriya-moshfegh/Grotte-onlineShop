import React, { useState } from "react";

import { AiFillThunderbolt } from "react-icons/ai";
import "./products.css";
let star = "⭐";
export default function ProductBox({
  img,
  title,
  price,
  category,
  rate,
  isNewItem,
}) {
  const [isNew, setIsNew] = useState(true);
  return (
    <section className="product-box w-[80%] mx-auto smd:mx-0  smd:w-1/3 h-full relative">
      {/* _____   is new   _______ */}
      {isNew && (
        <span className="sale-box">
          <AiFillThunderbolt className="mx-auto" /> sale!
        </span>
      )}
      {/* ______  img   ______ */}
      <div className="relative max-h-[70%] overflow-hidden">
        <img
          className=" w-full object-cover"
          src="/image/white-coat.jpg"
          alt="white coat img"
        />
        {/* ______   action-box     _____ */}
        <div className="action-box">
          <div className="w-1/3 mx-auto">text</div>
        </div>
      </div>
      {/* ______   title   ______ */}

      <a href="#" className="sale-title text-primary hover-p ">
        Bavyera french coat
      </a>
      {/* ______  category    ______ */}

      <a href="#" className="sale-category text-xsm hover-p">
        coats
      </a>
      {/* _____  rate   _______ */}

      <div className=" text-yellow-500 mt-4">{star.repeat(4)}</div>
      {/* ______  price  ______ */}

      <p className="text-primary text-sm">
        $180.00
        <span className="text-xsm text-black/30 line-through"> $ 225.00</span>
      </p>
    </section>
  );
}
