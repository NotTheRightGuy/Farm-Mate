import React from "react";

const Footer = () => {
  return (
    <footer className=" w-full bg-slate-100 mt-16 outline outline-1 outline-offset-1 outline-slate-300 text-[#114C36]">
      <div className="flex justify-between items-start gap-2 flex-wrap mt-20 mb-16 mx-32 ">
        <div className="flex flex-col items-start">
          <div className="flex justify-between  gap-20 flex-wrap">
            <div>
              <h4 className="font-montserrat text-xl leading-normal font-medium mb-6">
                About us
              </h4>
              <ul>
                <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                  Our Story
                </li>
                <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                  Careers
                </li>
                <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                  Contact Us
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
            <div>
              <h4 className="font-montserrat text-xl leading-normal font-medium mb-6">
                Customer Care
              </h4>
              <ul>
                <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                  Take The Plant Quiz
                </li>
                <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                  Track Order
                </li>
                <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                  Shipping Policy
                </li>
                <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                  Terms and Conditions
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
            <div>
              <h4 className="font-montserrat text-xl leading-normal font-medium mb-6">
                Offers & Rewards
              </h4>
              <ul>
                <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                  Plant Parent Rewards Club
                </li>
                <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                  FarmMate Coupons
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
            <div>
              <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6">
                Get in touch
              </h4>
              <ul>
                <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                  Call : +91-9129-9129-91
                </li>
                <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                  Email : support@farmmate.comns
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center px-10 py-3 outline outline-1 outline-offset-1 outline-slate-300">
          <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
            <p> &#169; 2024, FarmMate. All rights reserved.</p>
          </div>
          <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
