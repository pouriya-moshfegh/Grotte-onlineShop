import React from 'react'

export default function FooterBox({img,title}) {
  return (
    <div className="mt-4 flex gap-4 h-10 ">
    <img
      className="w-12 bg-white h-12 object-cover"
      src={img || "/public/image/bg.webp"}
      alt="image alt"
    />
    <div className="flex flex-col  h-20">
      <h6 className="text-xsm text-primary"> {title}  </h6>
      <p className="text-black inline-block h-4">****</p>
      <div className="text-[#9999] text-[12px] block "> by henry</div>
    </div>
  </div>
  )
}
