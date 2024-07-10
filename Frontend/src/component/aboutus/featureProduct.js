import React from "react";
import allKindProduct from "../../assest/allKindBrand.jpg"
import curatedProduct from "../../assest/curatedProduct.jpg"
import pasticideFreeGood from "../../assest/pasticideFreeGood.jpg"

const FeatureAbout = () => {
  return (
    <div className="h-[80vh] bg-[#F7F5EB] flex flex-col justify-center items-center gap-6">
      <div className="">
        <p className="text-otherTextColor font-bold">{"//"} FEATURES {"//"}</p>
      </div>
      <div className="mt-[-22px]">
        <p className="text-[60px] text-textColorBlack font-semibold">Why Choose Us.</p>
      </div>
      <div className="flex gap-8">
        <div className="w-[370px] bg-white text-black border">
          <div className="pt-[40px] pb-[20px] px-[40px] flex gap-4 items-center">
            <img src={allKindProduct} alt="" />
            <p className="text-[21px] font-bold">All Kind Brand</p>
          </div>
          <p className="px-[40px] pb-[30px]">
            Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do
            eiusmod te mp or incididunt ut labore.
          </p>
        </div>
        <div className="w-[370px] bg-white text-black border">
          <div className="pt-[40px] pb-[20px] px-[40px] flex gap-4 items-center">
            <img src={curatedProduct} alt="" />
            <p className="text-[21px] font-bold">Curated Products</p>
          </div>
          <p className="px-[40px] pb-[30px]">
            Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do
            eiusmod te mp or incididunt ut labore.
          </p>
        </div>
        <div className="w-[370px] bg-white text-black border">
          <div className="pt-[40px] pb-[20px] px-[40px] flex gap-4 items-center">
            <img src={pasticideFreeGood} alt="" />
            <p className="text-[21px] font-bold">Pesticide Free Goods</p>
          </div>
          <p className="px-[40px] pb-[30px]">
            Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do
            eiusmod te mp or incididunt ut labore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureAbout;
