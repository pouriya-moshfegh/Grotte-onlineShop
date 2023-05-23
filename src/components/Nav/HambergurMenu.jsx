import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";

export default function HambergurMenu() {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className="md:hidden">
        <BiMenu
          onClick={() => setIsActive((prevMode) => !prevMode)}
          className="text-primary text-2xl  relative right-1 cursor-pointer"
        ></BiMenu>
        {isActive && (
          <ul className="flex flex-col space-y-2 duration-200 text-xsm text-[14px] mt-6">
            <li className="hover-p duration-200">
              <a href="#"> Home Page &#8250;</a>
            </li>
            <li className="hover-p duration-200 font-semibold">
              <a href="#"> Shop Features &#8250;</a>
            </li>
            <li className="hover-p duration-200">
              <a href="#">Pages &#8250;</a>
            </li>
            <li className="hover-p duration-200">
              <a href="#">Blog &#8250; </a>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}
