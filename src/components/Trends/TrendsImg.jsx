import React from 'react'

export default function TrendsImg({img,title,time}) {
  return (
    <div className="w-full min-h-full sm:w-1/3 ">
    <img
      src={img}
      alt="No photo"
      className="w-full max-h-60 object-cover"
    />
    <a href='#' className="text-primary hover-p duration-200 text-[16px] font-semibold"> {title}
    </a>
    <p className="text-[#999999] font-[karla] text-xsm block -mt-1">{time}</p>
  </div>
  )
}
