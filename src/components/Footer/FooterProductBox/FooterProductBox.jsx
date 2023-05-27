import React from "react";
import allProducts from "../../../data/products";
import FooterBox from "../FooterBox/FooterBox";

export default function FooterProductBox({title,index1,index2,index3}) {
  return (
    <div className="h-full mt-10 sm:mt-0">
      <h3 className="footer-title">{title}</h3>
     <FooterBox {...allProducts[3]}/>
     <FooterBox {...allProducts[2]}/>
     <FooterBox {...allProducts[4]}/>
    </div>
  );
}
