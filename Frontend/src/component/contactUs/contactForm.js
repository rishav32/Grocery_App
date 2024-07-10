import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar , FaPencilAlt , FaUserAlt , FaEnvelope, FaGlobe } from "react-icons/fa";
import RLTRAnimatedBtn from "./rltrbutton";

const AddReview = () => {
  return (
    <div className="p-[30px] border bg-formBg">
      <p className="text-[25px] text-textColorBlack font-bold">Contact Us</p>
      {/* <div className="mt-5 flex gap-4"> */}
        {/* <p className="text-otherTextColor">Your Ratings:</p> */}
        {/* <ul className="flex text-starColor justify-left items-center gap-1">
          <li>
            <FaStar size={13} />
          </li>
          <li>
            <FaStar size={13} />
          </li>
          <li>
            <FaStar size={13} />
          </li>
          <li>
            <FaStarHalfAlt size={13} />
          </li>
          <li>
            <FaRegStar size={13} />
          </li>
        </ul> */}
      {/* </div> */}

      <div className="form">
        <form>
          <div className="space-y-9">
            <div className="">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <div className="mt-2 relative">
                    <FaPencilAlt size={16} className="absolute top-[16px] right-[16px] text-textColor"/>
                    <textarea
                      name="about"
                      placeholder="Type your Problem"
                      rows={4}
                      className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm placeholder:p-2 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <div className="relative">
                  <FaUserAlt size={16} className="absolute top-[16px] right-[16px] text-textColor"/>
                    <input
                      type="text"
                      name="street-name"
                      placeholder="Type your Name"
                      id="street-name"
                      autoComplete="street-name"
                      className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm placeholder:p-2 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <div className="relative">
                  <FaEnvelope size={16} className="absolute top-[16px] right-[16px] text-textColor"/>
                    <input
                      type="email"
                      name="street-address"
                      placeholder="Type your Email"
                      id="street-address"
                      autoComplete="street-address"
                      className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm placeholder:p-2 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <div className="relative">
                  <FaGlobe size={16} className="absolute top-[16px] right-[16px] text-textColor"/>
                    <input
                      type="text"
                      name="street-address"
                      placeholder="Type your Address"
                      id="street-address"
                      autoComplete="street-address"
                      className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm placeholder:p-2 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

            <div className="mt-6">
                <input type="checkbox" name="" id="" />
                <span className="ml-3">Save my name, email, and website in this browser for the next time.</span>
            </div>
          <div className="mt-6 flex items-center justify-left gap-x-6 ">
            <RLTRAnimatedBtn name = {"Send"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
