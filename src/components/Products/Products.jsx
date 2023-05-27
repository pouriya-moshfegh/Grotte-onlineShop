import React from "react";
import ProductBox from "./ProductBox";
import allProducts from "../../data/products";

export default function Products() {
  return (
    <section className="flex flex-col gap-y-4 ms:gap-y-0 sm:flex-row gap-x-4  mt-12">
      {allProducts.map((item,index) => {
        if(index > 1) return( <div key={item.id} className="w-full sm:w-1/3"> <ProductBox  {...item} /></div>);
      })}
    </section>
  );
}
