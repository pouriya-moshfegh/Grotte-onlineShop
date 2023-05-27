import React from "react";
import ImgBox from "./ImgBox";
import ProductBox from "../Products/ProductBox";
import allProducts from "../../data/products";

export default function Promote() {
  return (
    <section className="flex flex-col  smd:flex-row smd:gap-x-8 gap-y-2 smd:gap-y-0 sm:justify-between mt-6 xl:h-[60vh]">
      <ImgBox img="/image/demoimg-1.jpg" />
      <div className="w-full smd:w-1/3 h-80">
        <ProductBox {...allProducts[0]} />
      </div>
      <ImgBox img="/image/demoimg-2.jpg" />
    </section>
  );
}
