import React from "react";
import { Link, useParams } from "react-router-dom";

function ThankYouPage() {
  const { productName } = useParams();

  return (
    <div className="w-full max-w-[1366px] min-h-[100vh] flex flex-col justify-center items-center gap-5 p-5">
      <img
        src="/thank-you.png"
        alt="thank you"
        className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] object-cover"
      />
      <p className="font-[Poppins] text-xl font-semibold text-[#838383] text-center">
        Thank you for your interest in{" "}
        <span className="text-[#000] font-bold">{productName}</span>
      </p>
      <Link to="/products">
        <button
          type="button"
          className="w-[175px] h-[43px] bg-[#165315] px-2 rounded-full text-[16px] font-[Poppins] font-semibold text-[#fff]"
        >
          View Products
        </button>
      </Link>
    </div>
  );
}

export default ThankYouPage;
