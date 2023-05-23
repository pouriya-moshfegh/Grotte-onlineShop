import React, { useState } from "react";
import { BiCart } from "react-icons/bi";
import { RiSearchLine } from "react-icons/ri";

export default function Cart({searchHandler}) {
  const [searchValue, setSearchValue] = useState("");
  const cartHandler = () => {
    
  };
  const submitHandler = (e) => {
    e.preventDefault()
    searchHandler(searchValue)
  };

  return (
    <div className=" text-primary flex w-16 justify-between items-center ">
      {/* _________  cart  _____________ */}

      <div className="relative -top-[1px]">
        <BiCart
          onClick={cartHandler}
          className="inline-block text-xl cursor-pointer"
        />
        <span className="text-xsm font-bold"> 2</span>
      </div>

      {/* _________ search box  _____________ */}
      <div className="search-bar relative group ">
        <RiSearchLine className="text-md  cursor-pointer"></RiSearchLine>
        <form onSubmit={submitHandler} action="/serchpage">
          <input
            placeholder="Search Products..."
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="search-box absolute hidden w-40 border border-black/20 outline-none right-0 -bottom-8 text-xsm placeholder:text-xsm placeholder:text-[#999999] font-semibold px-1 py-[9px] rounded-sm  "
          />
        </form>
      </div>
    </div>
  );
}
