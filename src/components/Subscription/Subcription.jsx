import React,{useState} from "react";
import PrimaryBtn from "../Buttons/PrimaryBtn";

export default function Subcription() {
  const [emailValue, setEmailValue] = useState("");
  return (
    <div className="relative  text-white mt-10 ">
      {/* ____________ full size bg _____________ */}
      <div className="full-bg bg-[#3c2313] "></div>
      {/* ____________ content _____________ */}

      <div className="z-10 relative flex flex-col  md:flex-row md:justify-between py-5 ">
        <div>
          <h3 className="uppercase  font-semibold">
            Subscribe to our newsletter
          </h3>
          <p className="text-[#9999] text-xsm ">
            Type your e-mail address and click on the button.
          </p>
        </div>

      {/* ____________ form _____________ */}

        <form
          className="mt-4 md:mt-1 md:flex md:w-1/2 items-center justify-end gap-x-2"
          target="#"
          onSubmit={() => console.log("done")}
        >
          <input
            placeholder="E-MAIL ADDRESS"
            value={emailValue}
            onChange={(e)=>setEmailValue(e.target.value)}
            className="w-full md:w-1/2  bg-white/10 rounded-lg h-10 placeholder:text-xsm outline-none text-sm px-2 placeholder:text-white/30"
            type="email"
          />
          <button
            className="w-full mt-2 md:mt-0 md:w-1/3 bg-white/10 rounded-lg text-sm md:text-xsm  h-10 placeholder:text-xsm uppercase duration-100 hover:bg-black/10"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
