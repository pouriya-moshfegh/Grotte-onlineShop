import React, { useState } from 'react';

import HambergurMenu from "./HambergurMenu";
import NormalMenu from "./NormalMenu";
import Cart from "./Cart";

export default function Nav({searchHandler}) {
  
  return (
    <nav className="flex justify-between mt-8">
      <HambergurMenu />
      <NormalMenu />
      <Cart searchHandler={searchHandler}/>
    </nav>
  );
}
