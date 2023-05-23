import React, { useState } from 'react';

import Header from "../components/Header/Header";
import LogoF from "../components/Logo/LogoF";
import Nav from "../components/Nav/Nav";
import ModelSlider from '../components/ModelsSlider/ModelSlider';

export default function HomePage() {

  const [searchValue, setSearchValue] = useState("");
  const searchHandler = (searhcedText) => {
    setSearchValue(searhcedText)
  };


  return (
    <div className="px-4  ">
      <div className="lg:max-w-[1160px] mx-auto">
        <Header />
        <LogoF/>
        <Nav searchHandler={searchHandler}/>
        <ModelSlider/>
      </div>
    </div>
  );
}
