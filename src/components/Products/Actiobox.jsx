import React from 'react'
import {AiFillHeart,AiOutlineSearch,AiFillGift,AiOutlinePlus } from "react-icons/ai";

export default function Actiobox() {
  return (
    <>
         {/* ______   action-box     _____ */}
         <div className="action-box">
          <div className="flex gap-2 flex-wrap w-40">
            <button className="action-box-btn bg-[#c77f50]">
              <AiFillHeart className="mx-auto text-white" />
            </button>
            <button className="action-box-btn bg-[#789d74]">
              <AiOutlineSearch className="mx-auto text-white" />
            </button>
            <button className="action-box-btn bg-[#e89109]">
              <AiFillGift className="mx-auto text-white ]" />
            </button>
            <button className="action-box-add">
                Add to cart
              <AiOutlinePlus className="mx-auto text-white inline" />
            </button>
          </div>
        </div>
    </>
  )
}
