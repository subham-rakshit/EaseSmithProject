import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-[#f0ffe5] w-full max-w-[1366px] py-5 sm:py-10">
      <div className="w-full px-2 sm:px-5 lg:px-10 flex flex-col gap-5">
        {/* Footer Navigation Section */}
        <div className="w-full flex flex-col xl:flex-row xl:justify-between gap-4">
          {/* NewSletter & About & Service Section */}
          <div className="w-full flex flex-col sm:flex-row gap-4 flex-1">
            {/* Footer Subscribe To Our NewSletter Section */}
            <div className="flex flex-col gap-2 flex-1">
              <h1 className="font-[Poppins] text-[20px] font-medium text-[#000]">
                SUBSCRIBE TO OUR NEWSLETTER
              </h1>
              <p className="font-[Poppins] text-[14px] font-normal text-[#838383]">
                Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem
                aut necesbus enim
              </p>
              <input
                type="text"
                className="bg-white text-[13px] font-normal text-[#838383] px-2 py-1 border border-[#0000004D] w-[269px] h-[35px] font-[Poppins]"
                placeholder="Enter Your Email Address"
              />
              <button
                type="button"
                className="text-[16px] font-semibold font-[Poppins] text-[#fff] bg-[#247822] rounded-full w-[130px] h-[35px]"
              >
                SUBSCRIBE
              </button>
            </div>
            {/* About & Service Section */}
            <div className="flex flex-1 gap-4">
              {/* Footer About Us Section */}
              <div className="flex flex-col gap-2">
                <h1 className="font-[Poppins] text-[20px] font-medium text-[#000]">
                  ABOUT US
                </h1>
                <ul className="flex flex-col gap-2">
                  {[
                    {
                      name: "Our Story",
                    },
                    {
                      name: "Blogs",
                    },
                    {
                      name: "Careers",
                    },
                    {
                      name: "Contact Us",
                    },
                    {
                      name: "Help & Support",
                    },
                  ].map((item, index) => (
                    <li
                      className="text-[15px] font-[Poppins] font-medium text-[#999999] hover:underline hover:cursor-pointer transition-all duration-500"
                      key={`${item.name}${index}`}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Footer Our Services Section */}
              <div className="flex flex-col gap-2">
                <h1 className="font-[Poppins] text-[20px] font-medium text-[#000]">
                  OUR SERVICES
                </h1>
                <ul className="flex flex-col gap-2">
                  {[
                    {
                      name: "Book Maali",
                    },
                    {
                      name: "Plant Day Care",
                    },
                    {
                      name: "Rent Plants",
                    },
                    {
                      name: "Plants & Pots",
                    },
                    {
                      name: "Gardening Tools",
                    },
                  ].map((item, index) => (
                    <li
                      className="text-[15px] font-[Poppins] font-medium text-[#999999] hover:underline hover:cursor-pointer transition-all duration-500"
                      key={`${item.name}${index}`}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* Useful Links & Get In Touch Section */}
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            {/* Footer Useful Links Section */}
            <div className="flex flex-col gap-2 flex-1">
              <h1 className="font-[Poppins] text-[20px] font-medium text-[#000]">
                USEFUL LINKS
              </h1>
              <ul className="flex flex-col gap-2">
                {[
                  {
                    name: "My Account",
                  },
                  {
                    name: "Orders & Returns",
                  },
                  {
                    name: "Track Order",
                  },
                  {
                    name: "Terms & Conditions",
                  },
                  {
                    name: "Privacy Policy",
                  },
                  {
                    name: "Return, Refund & Replacement Policy",
                  },
                ].map((item, index) => (
                  <li
                    className="text-[15px] font-[Poppins] font-medium text-[#999999] hover:underline hover:cursor-pointer transition-all duration-500"
                    key={`${item.name}${index}`}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
            {/* Footer Get In Touch Section */}
            <div className="flex flex-col gap-2 flex-1">
              <h1 className="font-[Poppins] text-[20px] font-medium text-[#000]">
                GET IN TOUCH
              </h1>
              <ul className="flex flex-col gap-2">
                <li className="text-[15px] font-[Poppins] font-medium text-[#999999] hover:underline hover:cursor-pointer transition-all duration-500">
                  Address: F-262, First Floor, Sushant Lok Phase-III, Sector-57,
                  Gurgaon, Haryana, India 122003 Call: +919958287272 Email:
                  care@chaperoneplants.com
                </li>
                <li className="text-[15px] font-[Poppins] font-medium text-[#999999] hover:underline hover:cursor-pointer transition-all duration-500 flex flex-col">
                  <span>Call:</span>
                  <span>+919958287272</span>
                </li>
                <li className="text-[15px] font-[Poppins] font-medium text-[#999999] hover:underline hover:cursor-pointer transition-all duration-500 flex flex-col">
                  <span>Email:</span>
                  <span>care@chaperoneplants.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Footer Chaperone Section */}
        <div className="w-full">
          <h1 className="font-[Poppins] text-[20px] font-medium text-[#000] mb-2">
            CHAPERONE
          </h1>
          <p className="text-[#838383] font-normal text-[16px] font-[Poppins]">
            Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
            necessitatibus enim ut internos accusantium a numquam autem ab rerum
            omnis. Non molestiae ratione et laborum doloribus aut molestiae
            voluptates ut porro excepturi sit molestiae obcaecati qui quis
            beatae est voluptatem eius. Et architecto nihil id labore omnis hic
            iste deleniti et porro aspernatur.
          </p>
        </div>
        {/* Footer Follow Us Section */}
        <div className="w-full">
          <h1 className="font-[Poppins] text-[20px] font-medium text-[#000] mb-2">
            Follow us on
          </h1>
          <ul className="flex items-center gap-5">
            {[
              {
                socialImage: "/insta.png",
                link: "https://www.instagram.com/chaperoneplants/",
              },
              {
                socialImage: "/facebook.png",
                link: "https://www.facebook.com/ChaperonePlants",
              },
              {
                socialImage: "/thread.png",
                link: "https://www.threads.net/",
              },
              {
                socialImage: "/youtube.png",
                link: "https://www.youtube.com/@chaperoneplants9828",
              },
              {
                socialImage: "/linkedin.png",
                link: "https://www.linkedin.com/company/chaperone-plants/",
              },
            ].map((item, index) => (
              <Link to={item.link} target="_blank" key={`social-${index}`}>
                <li>
                  <img src={item.socialImage} alt="socials" />
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <hr className="border-[1px] border-[#0000004D] mt-5" />
      <p className="px-2 sm:px-5 lg:px-10 text-[16px] font-medium font-[Poppins] text-[#0000004D] mt-5">
        © 2023, chaperone.com All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
