import React from "react";

export default function Blog() {
  return (
    <section className="flex gap-x-6 h-[50vh] overflow-hidden mt-10">
      <img
        className="w-1/2 h-full object-cover"
        src="/image/demoimg-3.jpg"
        alt="blogpost06"
      />
      <img
        className="w-1/2 h-full  object-cover"
        src="/image/demoimg-4.jpg"
        alt="blogpost06"
      />
    </section>
  );
}
