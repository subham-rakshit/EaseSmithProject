import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { FaGripLines } from "react-icons/fa";
import { MdClose } from "react-icons/md";

function Header() {
  const [path, setPath] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { cartProductList } = useSelector((state) => state.cartProduct);

  useEffect(() => {
    const urlParams = new URLSearchParams(location);
    const pathURL = urlParams.get("pathname");

    setPath(pathURL);
  }, [location]);
  return (
    <div className="relative w-full max-w-[1366px]">
      {/* Header Top */}
      <div className="w-full min-h-[33px] bg-[#165315] px-2 sm:px-5 flex items-center justify-between">
        <p className="font-[Inter] text-[#ffffff] text-[10px] sm:text-[12px] lg:text-[14px] font-medium flex items-center justify-center w-full max-w-[647px] ml-auto mr-auto">
          Free Shipping on orders above 999/-
        </p>
        <p className="font-[Inter] text-[#ffffff] text-[10px] sm:text-[12px] lg:text-[14px] font-medium">
          Call us on: +91 98768 05120
        </p>
      </div>
      {/* Navigation Section */}
      <div className="w-full min-h-[97px] px-2 sm:px-5 flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/">
          <div className="flex items-center gap-2">
            <img
              src="/Chaperone.png"
              alt="chaperone logo"
              className="w-[50px] xl:w-[60px] h-[51px] xl:h-[61px]"
            />
            <p className="text-[20px] xl:text-[26px] font-semibold text-[#0F4811] font-[Poppins]">
              Chaperone
            </p>
          </div>
        </Link>
        {/* Navlinks Section */}
        <div className="hidden lg:inline-block">
          <ul className="flex items-center gap-5">
            {[
              {
                name: "Home",
                path: "/",
              },
              {
                name: "Plants & Pots",
                path: "/products",
              },
              {
                name: "Tools",
                path: "/tools",
              },
              {
                name: "Our Services",
                path: "/services",
              },
              {
                name: "Blog",
                path: "/blog",
              },
              {
                name: "Our Story",
                path: "/story",
              },
              {
                name: "FAQs",
                path: "/faqs",
              },
            ].map((item, index) => (
              <Link to={item.path} key={`${item.name}${index}`}>
                <li
                  className={`font-[Poppins] text-[13px] xl:text-[16px] font-medium ${
                    path === item.path ? "text-[#F3A939]" : "text-[#000]"
                  }`}
                >
                  <div className="flex items-center gap-1">
                    <span>{item.name}</span>
                    {(index === 2 || index === 3) && (
                      <img
                        src="/Subtract.png"
                        alt="arrow"
                        className="w-[12px] h-[px] object-cover"
                      />
                    )}
                  </div>
                  {path === item.path && (
                    <hr className="w-1/2 border border-[#F3A939] mx-auto" />
                  )}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        {/* Profile And Cart Section And Mobile NavButton */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* My Profile */}
          <div className="flex flex-col items-center gap-1">
            <img
              src="/profile.png"
              alt="account profile"
              className="w-[15px] h-[15px] xl:w-[20px] xl:h-[20px]"
            />
            <span className="text-[#000] font-[Poppins] font-medium text-[12px] xl:text-[13px]">
              My Profile
            </span>
          </div>
          {/* Cart */}
          <div className="relative flex flex-col items-center">
            <img
              src="/cart.png"
              alt="account profile"
              className="w-[18px] h-[18px] xl:w-[28px] xl:h-[28px]"
            />
            <span className="text-[#000] font-[Poppins] font-medium text-[12px] xl:text-[13px]">
              Cart
            </span>
            <p className="absolute -top-3 left-full -translate-x-[100%] w-[19px] h-[19px] rounded-full bg-[#F3A939] text-[8px] xl:text-[11px] font-[Poppins] text-[#000] flex justify-center items-center">
              {cartProductList.length}
            </p>
          </div>
          {/* Mobile Navigation Items */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="lg:hidden"
          >
            {isOpen ? <MdClose /> : <FaGripLines />}
          </button>
        </div>
      </div>
      {/* Navigation Mobile View */}
      <motion.div
        initial={{ x: "-100%", opacity: 1 }}
        animate={isOpen ? { x: 0, opacity: 1 } : { x: "-100%", opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="absolute w-full bg-[#0f4811] p-5 lg:hidden z-50 overflow-hidden"
      >
        <ul className="flex flex-col gap-4">
          {[
            {
              name: "Home",
              path: "/",
            },
            {
              name: "Plants & Pots",
              path: "/products",
            },
            {
              name: "Tools",
              path: "/tools",
            },
            {
              name: "Our Services",
              path: "/services",
            },
            {
              name: "Blog",
              path: "/blog",
            },
            {
              name: "Our Story",
              path: "/story",
            },
            {
              name: "FAQs",
              path: "/faqs",
            },
          ].map((item, index) => (
            <Link key={`${item}-${index + 1}`} to={item.path}>
              <li
                className={`font-[Poppins] text-[20px] font-medium ${
                  path === item.path ? "text-[#F3A939]" : "text-[#fff]"
                }`}
              >
                {item.name}
                {path === item.path && (
                  <hr className="w-1/4 border border-[#F3A939] mr-auto" />
                )}
              </li>
            </Link>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default Header;
