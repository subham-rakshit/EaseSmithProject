import React from "react";
import { Link } from "react-router-dom";

function DevelopmentPhase() {
  return (
    <div className="w-full max-w-[1366px] min-h-[100vh] flex flex-col justify-center items-center font-[Poppins] p-5">
      <img
        src="/sorry-page.png"
        alt="sorry image"
        className="w-[280px] h-[280px] sm:w-[400px] sm:h-[400px]"
      />
      <h1 className="text-xl sm:text-4xl font-semibold mt-5 text-center">
        Page Under Development
      </h1>
      <p className="text-xs sm:text-sm font-normal text-[#838383] text-center mt-2 w-full max-w-[700px]">
        We’re currently working on this page to bring you the best experience.
        Please check back soon as we continue to make updates. Thank you for
        your patience!
      </p>
      <Link to="/products">
        <button
          type="button"
          className="text-[16px] font-semibold font-[Poppins] text-[#fff] bg-[#247822] rounded-full px-5 py-2 mt-5"
        >
          View Products
        </button>
      </Link>
    </div>
  );
}

export default DevelopmentPhase;
