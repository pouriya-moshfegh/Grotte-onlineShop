import React from "react";

export default function ImgBox({img}) {
  return (
    <>

      <div className="w-[80%] mx-auto smd:mx-0 smd:w-1/3 smd:max-h-[60vh]   overflow-hidden">
        <img className="h-full w-full object-cover " src={img} alt="sale img" /> 
      </div>
    </>
  );
}
