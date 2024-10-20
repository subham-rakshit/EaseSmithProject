import React, { useRef } from "react";
import { nurseryLists } from "../data/carousal-data";

function PlantsPots() {
  const carousalBoxRef = useRef(null); //INFO: Carousal Images Container reference

  //NOTE: On previous click
  const onPrevious = () => {
    let carousalBox = carousalBoxRef.current;
    if (carousalBox) {
      let width = carousalBox.clientWidth;
      carousalBox.scrollLeft = carousalBox.scrollLeft - width;
    }
  };

  //NOTE: On next click
  const onNext = () => {
    let carousalBox = carousalBoxRef.current;
    if (carousalBox) {
      let width = carousalBox.clientWidth;
      carousalBox.scrollLeft = carousalBox.scrollLeft + width;
    }
  };

  return (
    <div className="w-full max-w-[1366px] min-h-[100vh] px-5">
      {/* Search Box Section */}
      <div className="w-full flex justify-center items-center">
        <div className="w-full max-w-[370px] border-b border-[#00000099] flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 flex-1">
            <img
              src="/search-icon.png"
              alt="searchbar"
              className="w-[18px] h-[18px] object-cover"
            />
            <input
              type="text"
              placeholder="Seach Plant"
              className="font-[Poppins] text-[16px] font-normal text-[#838383] flex-1 px-2 py-1 border-none outline-none"
            />
          </div>
          <img
            src="/leaf-search-bar-image.png"
            alt="leaf image"
            className="w-[32px] h-[25px] object-cover"
          />
        </div>
      </div>
      {/* Plants & Pots Button Section */}
      <div className="w-full flex items-center gap-2 mt-5">
        <button
          type="button"
          className="text-[20px] font-semibold font-[Poppins] text-[#fff] bg-[#165315] w-[115px] h-[37px]"
        >
          Plants
        </button>
        <button
          type="button"
          className="text-[20px] font-light font-[Poppins] text-[#0000004D] border border-[#0000004D] w-[115px] h-[37px]"
        >
          Plots
        </button>
      </div>
      {/* Description Section */}
      <p className="text-[16px] font-[Poppins] font-normal text-[#838383] mt-3">
        Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
        necessitatibus enim ut internos accusantium a numquam autem ab rerum
        omnis. Non molestiae ratione et laborum doloribus aut molestiae
        voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae
        est voluptatem eius. Et architecto nihil id labore omnis hic iste
        deleniti et porro aspernatur.
      </p>
      {/* Nursery Section */}
      <div className="w-full mt-5">
        <h1 className="text-[24px] font-semibold font-[Poppins] text-[#000]">
          Nursery
        </h1>
        <div className="carousal-container relative mt-3">
          {/* Previous Button */}
          <button
            type="button"
            className="absolute top-1/2 -translate-y-[50%] w-[35px] h-[35px] rounded-full bg-[#00000066] flex justify-center items-center z-50"
            onClick={onPrevious}
          >
            <img
              src="/right-arrow.png"
              alt="right arrow"
              className="w-[12px] h-[8px] rotate-180"
            />
          </button>
          {/* Next Button */}
          <button
            type="button"
            className="absolute left-full top-1/2 -translate-y-[50%] -translate-x-[100%] w-[35px] h-[35px] rounded-full bg-[#00000066] flex justify-center items-center z-50"
            onClick={onNext}
          >
            <img
              src="/right-arrow.png"
              alt="right arrow"
              className="w-[12px] h-[8px]"
            />
          </button>

          {/* Nursery Items Carousal Section */}
          <ul
            className="image-carousal flex items-center gap-5 scroll-smooth overflow-hidden"
            ref={carousalBoxRef}
          >
            {nurseryLists.map((item, index) => (
              <li
                key={`nursery-item-${index + 1}`}
                className="w-[180px] flex flex-col justify-center items-center gap-2 shrink-0"
              >
                <img
                  src={item.image}
                  alt={`nursery image ${index + 1}`}
                  className="w-[120px] h-[120px] object-cover rounded-full"
                />
                <p className="text-[14px] font-[Poppins] font-light text-[#838383] text-center">
                  Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum{" "}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PlantsPots;
