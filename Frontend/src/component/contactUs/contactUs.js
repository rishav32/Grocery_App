import React from "react";
import backpic from '../../assest/contactUs/backgroundpic.jpg'
import manimg from '../../assest/contactUs/manimg.jpg'
import vegfruit from '../../assest/contactUs/vegfruit.jpg'
import RLTRAnimatedBtn from "./rltrbutton";
import LTRAnimatedBtn from "./ltrbutton";

const ContactUs = () => {
  return (
    <div>
      <div
        className="md:bg-cover md:bg-center bg-gray-700 h-[60vh] mt-[80px] overflow-y-hidden"
        style={{
            backgroundImage:
            "url('../../assest/contactUs/backgroundpic.jpg')",
        }}
      >
        <div className="flex justify-between items-center ">
          <div className="w-[549px] h-[487px]">
            <img
              src={vegfruit}
              alt="vegfruit"
            />
          </div>
          <div className="text-white flex flex-col items-center gap-12 mb-14">
            <div className="flex flex-col items-center gap-5">
              <p className="text-base text-textColor">
                <b>{"//"} ANY QUESTION YOU HAVE {"//"}</b>
              </p>
              <p className="text-5xl">
                <b>886-301-37-28</b>
              </p>
            </div>
            <div className="flex flex-row items-center gap-4">
              <RLTRAnimatedBtn name={"MAKE A CALL"}/>   
              
              <LTRAnimatedBtn name={"CONTACT US"} />           
            </div>
          </div>
          <div className="w-[400px] h-[500px]">
            <img
              src={manimg}
              alt="manimg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
