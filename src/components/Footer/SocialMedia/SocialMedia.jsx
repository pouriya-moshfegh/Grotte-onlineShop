import React from "react";
import { AiFillFacebook,AiFillTwitterCircle,AiFillInstagram } from "react-icons/ai";
import { BsPinterest} from "react-icons/bs";

export default function SocialMedia() {
  return (
    <div className="mt-7">
        {/* facebook */}
      <div className="social-box">
        <a href="#">
          <AiFillFacebook className="inline-block" /> Facebook
        </a>
      </div>
        {/* Twitter */}
      <div className="social-box">
        <a href="#">
          <AiFillTwitterCircle className="inline-block" /> Twitter
        </a>
      </div>
        {/* Instagram */}
      <div className="social-box">
        <a href="#">
          <AiFillInstagram className="inline-block" /> Instagram
        </a>
      </div>
        {/* Pinterest */}
      <div className="social-box">
        <a href="#">
          <BsPinterest className="inline-block" /> Pinterest
        </a>
      </div>
    </div>
  );
}
