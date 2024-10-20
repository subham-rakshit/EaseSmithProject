import React from "react";

function ProductsFilterSection() {
  return (
    <div className="w-[304px] h-[fit-content] px-4 py-2 bg-[#f0ffe5]">
      <div className="flex items-center justify-between border-b-[1px] border-[#A8A8A8] py-2">
        <span className="text-[16px] font-normal font-[Inter] text-[#6E6E6E]">
          Filter
        </span>
        <span className="text-[16px] font-normal font-[Inter] text-[#6E6E6E]">
          CLEAR ALL
        </span>
      </div>
      <ul>
        {[
          "Type of Plants",
          "Price",
          "Nursery",
          "Ideal Plants Location",
          "Indoor/Outdoor",
          "Maintenance",
          "Plant Size",
          "Water Schedule",
          "Color",
          "Seasonal",
          "Light Efficient",
        ].map((item, index) => (
          <li
            className={`flex items-center justify-between text-[16px] font-normal font-[Inter] text-[#6E6E6E] ${
              index !== 10 && "border-b-[0.5px] border-[#A8A8A8]"
            } py-2`}
            key={`${item}-${index}`}
          >
            {item}
            <img src="/+.png" alt="plus" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsFilterSection;
