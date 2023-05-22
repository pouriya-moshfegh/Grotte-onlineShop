import React from "react";
import Header from "../components/Header/Header";
import LogoF from "../components/Logo/LogoF";

export default function HomePage() {
  return (
    <div className="px-4">
      <div className="lg:max-w-[1160px] mx-auto">
        <Header />
        <LogoF/>
      </div>
    </div>
  );
}
