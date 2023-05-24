import React from "react";
import ImgBox from "./ImgBox";
import ProductBox from "../Products/ProductBox";

export default function Promote() {
  return (
    <section className="flex flex-col smd:flex-row smd:gap-x-8 gap-y-2 smd:gap-y-0 sm:justify-between mt-6 xl:h-[50vh]">
      <ImgBox img="/image/demoimg-1.jpg"/>
      <ProductBox img="/image/demoimg-4.jpg"/>
      <ImgBox img="/image/demoimg-2.jpg"/>
    </section>
  );
}
