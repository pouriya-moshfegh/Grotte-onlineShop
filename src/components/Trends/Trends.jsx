import React from "react";
import TrendsImg from "./TrendsImg";

export default function Trends() {
  return (
    <section className="mt-10 ">
      <h1 className="text-primary text-xl font-semibold font-[ArbutusSlab] block">
        Latest trends
      </h1>
      <p className="text-[#999999] font-[karla] text-xsm block -mt-1">
        This is a text which displayed by Header & Teaser shortcode.
      </p>
      <hr className="mt-2" />
      <div className="flex flex-col sm:flex-row gap-x-4 gap-y-4 sm:gap-y-0">
        {/* _________________ */}

        <TrendsImg
          img="/image/blogpost01-600x400.jpg"
          title=" First day in london "
          time="January 25,2018"
        />

        {/* _________________ */}

        <TrendsImg
          img="/image/blogpost02-600x400.jpg"
          title="It’s Party Time!"
          time="spetmeber 2,2018"
        />

        {/* _________________ */}

        <TrendsImg
          img="/image/blogpost06-600x400.jpg"
          title=" Latest Retro Collection "
          time="January 5,2019"
        />
        {/* _________________ */}
      </div>
    </section>
  );
}
