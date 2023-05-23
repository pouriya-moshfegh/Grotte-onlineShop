import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import "./navStyle.css";
export default function NormalMenu() {
  return (
    <div className="md:block hidden ">
      <ul className="flex duration-200 text-[15px] text-primary space-x-4">
        {/* __________       HomePage    __________ */}
        <div className="dropdown relative ">
          <li className="hover-p duration-200 text-[#ce6ec2]">
            <a href="#">
              HomePage
              <AiOutlineDown className="inline ml-1" />
            </a>
          </li>
          <ul className="dropdown-content">
            <li className="">
              <a className="hover-p" href="#">
                Home Page Demo 1
              </a>
            </li>
            <li className="">
              <a className="hover-p" href="#">
                Home Page Demo 2
              </a>
            </li>
            <li className="">
              <a className="hover-p" href="#">
                Home Page Demo 3
              </a>
            </li>
            <li className="">
              <a className="hover-p" href="#">
                Home Page Demo 4
              </a>
            </li>
          </ul>
        </div>
        {/* _________      Shop Features    ___________ */}

        <div className="dropdown relative ">
          <span className="absolute -top-3 -left-[6px] text-[11px] bg-[#ce6ec2] p-[1px] text-white rounded-sm font-semibold">
            New
          </span>
          <li className="hover-p duration-200 font-semibold">
            <a href="#">
              Shop Features
              <AiOutlineDown className="inline ml-1" />
            </a>
          </li>
          <ul className="dropdown-content">
            <li className="">
              <a className="hover-p" href="#">
                Some text
              </a>
            </li>
            <li className="">
              <a className="hover-p" href="#">
                Some text
              </a>
            </li>
            <li className="">
              <a className="hover-p" href="#">
                Some text
              </a>
            </li>
            <li className="">
              <a className="hover-p" href="#">
                Some text
              </a>
            </li>
          </ul>
        </div>
        {/* __________   Pages  __________ */}

        <li className="hover-p duration-200">
          <a href="#">
            Pages
            <AiOutlineDown className="inline ml-1" />
          </a>
        </li>
        {/* __________  Blog  __________ */}

        <div className="dropdown relative ">
          <li className="hover-p duration-200">
            <a href="#">
              Blog
              <AiOutlineDown className="inline ml-1" />
            </a>
          </li>
          <ul className="dropdown-content">
            <li className="">
              <a className="hover-p" href="#">
                pages
              </a>
            </li>
            <li className="">
              <a className="hover-p" href="#">
                about
              </a>
            </li>
            <li className="">
              <a className="hover-p" href="#">
                Asked questions
              </a>
            </li>
            <li></li>
          </ul>
        </div>
      </ul>
    </div>
  );
}
