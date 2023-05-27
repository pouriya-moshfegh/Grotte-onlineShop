import React from "react";
import About from "./About/About";
import "./footer.css";
import FooterProductBox from "./FooterProductBox/FooterProductBox";
import SocialMedia from "./SocialMedia/SocialMedia";

export default function Footer() {
  return (
    <footer className="relative  text-white  ">
      {/* ____________ full size bg _____________ */}
      <div className="full-bg bg-[#edeae3] "></div>

      {/* ____________ Main content _____________ */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-8">
        {/* _______ */}

        <About />
        <FooterProductBox title="Reviews" />
        <FooterProductBox title="Products" />
        <SocialMedia />

        {/* _______ */}
      </div>
    </footer>
  );
}
