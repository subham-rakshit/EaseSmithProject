import React, { useState } from "react";
import { productList } from "../data/products";
import { LuIndianRupee } from "react-icons/lu";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { productItemAddToCart } from "../redux-slice/ProductItemSlice";

function ProductItemsSection() {
  const [numberOfProduct, setNumberOfProduct] = useState(6);
  const [productDetails, setProductDetails] = useState(null);
  const [openModel, setOpenModel] = useState(false);
  const dispatch = useDispatch();

  //NOTE: Increase the numberOfProduct by 6
  const onViewMore = () => {
    setNumberOfProduct(numberOfProduct + numberOfProduct);
  };

  //NOTE: Store product item in local storage
  const handleAddToCartItem = () => {
    if (productDetails) {
      dispatch(productItemAddToCart(productDetails));
      setOpenModel(false);
    }
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
      <ul className="relative flex flex-wrap gap-5 mt-5">
        {sliceProduct.map((item, index) => {
          return (
            <li className="w-[260px]" key={`${item.productName}-${index}`}>
              <div className="border border-[#0000004D]">
                <img
                  src={item.productImage}
                  alt={`${item.productName}${index}`}
                  className="w-[255px] h-[246px] bg-cover"
                />
                <Link to={`/thank-you/${item.productName}`}>
                  <button
                    type="button"
                    className="bg-[#165315] w-full h-[36px] text-[#fff] font-[Poppins] font-semibold text-[16px]"
                  >
                    View Product
                  </button>
                </Link>
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
                    onClick={() => {
                      setProductDetails(item);
                      setOpenModel(true);
                    }}
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
        {/* Add to cart model */}
        {openModel && (
          <div className="absolute left-1/2 -translate-x-[50%] w-full max-w-[453px] h-[661px] bg-[#cae5b5] rounded-xl">
            <div className="relative w-full max-w-[453px] h-[661px] flex flex-col">
              <button
                type="button"
                className="mt-5 mr-5 self-end z-[50]"
                onClick={() => setOpenModel(false)}
              >
                <MdClose size={20} />
              </button>
              <img
                src="/Ellipse-40.png"
                alt="object"
                className="absolute top-full -translate-y-[100%]"
              />
              <img
                src="/Ellipse-41.png"
                alt="object"
                className="absolute left-full -translate-x-[100%]"
              />
              <div className="w-full h-full flex flex-col items-center z-[50]">
                <h1 className="text-[20px] text-[#0F4811] font-[Poppins] font-normal border-b border-[#B0B0B0] w-[90%] text-center pb-2">
                  Confirmation Message
                </h1>
                <div className="w-full h-full flex flex-col justify-center items-center gap-5">
                  <h1 className="text-[24px] text-[#0F4811] font-[Poppins] font-semibold w-[80%] text-center mt-5">
                    Confirm Your Order!
                  </h1>
                  <img
                    src={productDetails ? productDetails.productImage : ""}
                    alt={productDetails ? productDetails.productName : ""}
                    className="w-[100px] h-[100px] bg-cover rounded-full mt-5"
                  />
                  <p className="text-[16px] text-[#165315] font-[Poppins] font-normal mt-5">
                    {productDetails ? "Indoor Plant, Low maintenance" : ""}
                  </p>
                  {/* Product Confirmation Buttons */}
                  <div className="flex items-center gap-3 mt-5">
                    <button
                      type="button"
                      className="text-[20px] font-semibold font-[Poppins] text-[#fff] bg-[#165315] w-[115px] h-[37px]"
                      onClick={handleAddToCartItem}
                    >
                      Confirm
                    </button>
                    <button
                      type="button"
                      className="text-[20px] font-light font-[Poppins] text-[#e90a0a] border border-[#e90a0a] w-[115px] h-[37px]"
                      onClick={() => {
                        setOpenModel(false);
                        setProductDetails(null);
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
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
