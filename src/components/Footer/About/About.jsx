import React from "react";
import { AiOutlineStar, AiOutlineScissor } from "react-icons/ai";

export default function About() {
  return (
    <div className="h-40 ">
      <h3 className="footer-title">about grotte</h3>
      <div className="mt-4 text-[#999999] font-[karla] text-xsm ">
        <p>
          <AiOutlineStar className="inline-block mr-1" /> We offer collections
          that are wide-ranging and varied for women, men, teenagers and
          children.
        </p>
        <p className="mt-2">
          <AiOutlineScissor className="inline-block mr-1" /> We offer
          collections that are wide-ranging and varied for women, men, teenagers
          and children.
        </p>text-[#999999] font-[karla]
        <p className="mt-3"> Thanks for visiting </p>
      </div>
    </div>
  );
}
