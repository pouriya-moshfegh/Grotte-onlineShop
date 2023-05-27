import React, { useState } from 'react';

import Header from "../components/Header/Header";
import LogoF from "../components/Logo/LogoF";
import Nav from "../components/Nav/Nav";
import ModelSlider from '../components/ModelsSlider/ModelSlider';
import Promote from '../components/Promote/Promote';
import Blog from '../components/Blog/Blog';
import Products from '../components/Products/Products';
import Trends from '../components/Trends/Trends';
import Subcription from '../components/Subscription/Subcription';
import Footer from '../components/Footer/Footer';

export default function HomePage() {

  const [searchValue, setSearchValue] = useState("");
  const searchHandler = (searhcedText) => {
    setSearchValue(searhcedText)
  };


  return (
    <div className="px-8  ">
      <div className="lg:max-w-[1040px] mx-auto">
        <Header />
        <LogoF/>
        <Nav searchHandler={searchHandler}/>
        <ModelSlider/>
        <Promote/>
        <Blog/>
        <Products/>
        <Trends/>
        <Subcription />
        <Footer/>
      </div>
    </div>
  );
}
