import React, { useState } from "react";
import { productList } from "../data/products";
import { LuIndianRupee } from "react-icons/lu";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

function ProductItemsSection() {
  const [numberOfProduct, setNumberOfProduct] = useState(6);

  //NOTE: Increase the numberOfProduct by 6
  const onViewMore = () => {
    setNumberOfProduct(numberOfProduct + numberOfProduct);
  };

  const sliceProduct = productList.slice(0, numberOfProduct); //NOTE: Slice the productList according to numberOfProduct

  return (
    <div className="w-full">
      {/* Sort By Section */}
      <div className="flex items-center gap-3">
        <span className="text-[15px] font-[Poppins] text-[#6A6A6A] font-normal">
          {productList.length} products
        </span>
        <div className="flex items-center justify-between gap-2 bg-[#165315] w-[139px] h-[36px] px-2 text-[16px] font-semibold text-[#fff] font-[Poppins]">
          <span>SORT BY</span>
          <img
            src="/top-arrow.png"
            alt="subtract"
            className="w-[14px] h-[7px] rotate-180"
          />
        </div>
      </div>
      {/* Product Items Section */}
      <ul className="flex flex-wrap gap-5 mt-5">
        {sliceProduct.map((item, index) => {
          return (
            <li className="w-[260px]" key={`${item.productName}-${index}`}>
              <div className="border border-[#0000004D]">
                <img
                  src={item.productImage}
                  alt={`${item.productName}${index}`}
                  className="w-[255px] h-[246px] bg-cover"
                />
                <button
                  type="button"
                  className="bg-[#165315] w-full h-[36px] text-[#fff] font-[Poppins] font-semibold text-[16px]"
                >
                  View Product
                </button>
              </div>
              <div className="flex flex-col mt-3">
                <h1 className="text-[20px] font-medium text-[#000] font-[Poppins]">
                  {item.productName}
                </h1>
                <p className="text-[14px] font-light text-[#838383] font-[Poppins]">
                  Indoor Plant, Low maintenance
                </p>
                {/* Rating */}
                <div className="flex items-center gap-1">
                  <img
                    src="/rating.png"
                    alt="rating"
                    className="w-[87px] h-[19px] object-cover"
                  />
                  <span className="text-[14px] font-medium text-[#A5A1A1] font-[Poppins]">
                    {item.rating}
                  </span>
                </div>
                {/* Price */}
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[16px] font-light text-[#5e5a5a] font-[Poppins] line-through flex items-center">
                    <LuIndianRupee />
                    {item.price}
                  </span>
                  <span className="text-[20px] font-semibold text-[#5E5A5A] font-[Poppins]">
                    {item.discountedPrice}
                  </span>
                </div>
                {/* Add to Cart Button */}
                <div className="flex items-center gap-1 mt-2">
                  <button
                    type="button"
                    className="flex items-center justify-between gap-2 bg-[#165315] rounded-lg px-2 py-1 flex-1"
                  >
                    <FaMinus size="13" color="white" />
                    <span className="text-[13px] font-[Poppins] text-[#fff] font-medium">
                      Add to cart
                    </span>
                    <FaPlus size="13" color="white" />
                  </button>
                  <button className="px-3 py-1 text-[13px] font-[Poppins] text-[#165315] font-medium rounded-lg border border-[#165315]">
                    By on Rent
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      {/* View More button */}

      <div className="flex items-center justify-center my-8">
        <button
          type="button"
          className="w-[175px] h-[43px] bg-[#165315] px-2 rounded-full text-[16px] font-[Poppins] font-semibold text-[#fff]"
          onClick={onViewMore}
          disabled={sliceProduct.length === productList.length}
        >
          View More
        </button>
      </div>
    </div>
  );
}

export default ProductItemsSection;
