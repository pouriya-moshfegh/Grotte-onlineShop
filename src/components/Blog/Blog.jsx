import React from "react";

export default function Blog() {
  return (
    <section className="flex flex-col gap-y-3 sm:gap-y-0 sm:flex-row gap-x-6 sm:h-[40vh] overflow-hidden mt-20">
      <img
        className="w-[80%] mx-auto sm:mx-0 sm:w-1/2 h-full object-cover"
        src="/image/demoimg-3.jpg"
        alt="blogpost06"
      />
      <img
        className="w-[80%] mx-auto sm:mx-0 sm:w-1/2 h-full  object-cover"
        src="/image/demoimg-4.jpg"
        alt="blogpost06"
      />
    </section>
  );
}
