import React from 'react'
import ravi from '../../assest/teammembers/mypics.jpg'
import shubham from '../../assest/teammembers/itsme.jpg'
import ankit from '../../assest/teammembers/member3.jpg'
import shimmi from '../../assest/teammembers/member4.jpg'
// import alldata from "../../../utils/consts.js"
import {
    FaFacebook,
    FaTwitter,
    FaLinkedin,
  } from "react-icons/fa";

  const MembersDetails = [
    {
      name: "Ravi Kumar",
      Imgurl: ravi,
      pos: "Backend",
    },
    {
      name: "Shubham Kumar",
      Imgurl: shubham,
      pos: "Backend",
    },
    {
      name: "Ankit Kumar",
      Imgurl: ankit,
      pos: "Frontend",
    },
    {
      name: "Simmi Sharma",
      Imgurl: shimmi,
      pos: "Frontend",
    },
  ];

const TeamMembers = () => {
  return (
    <div className='h-[90vh] container mx-auto flex flex-col gap-4 justify-center items-center py-[53px]'>
      <div className="">
        <p className='text-[60px] font-bold text-textColorBlack'>Team Member</p>
      </div>
      <div className="flex gap-4 justify-center">
         {MembersDetails.map((item , key)=> (
        <div className="w-[16vw] h-[51vh] border hover:shadow-lg gap-2">
            <div key={key} className="flex flex-col justify-center items-center gap-3">
                <img src={item.Imgurl} alt="" className='w-[290px] h-[270px]'/>
                <p className='text-otherTextColor font-semibold'>{"//"} {item.pos} {"//"}</p>
                <p className='text-lg font-bold hover:text-otherTextColor text-textColorBlack cursor-pointer'>{item.name}</p>
                <div className="flex gap-5">
                    <FaFacebook size={19} className='cursor-pointer text-textColorBlack hover:text-textColor'/>
                    <FaTwitter size={19} className='cursor-pointer text-textColorBlack hover:text-textColor'/>
                    <FaLinkedin size={19} className='cursor-pointer text-textColorBlack hover:text-textColor'/>
                </div>
            </div>
        </div>
         ))}
      </div>
    </div>
  )
}

export default TeamMembers
