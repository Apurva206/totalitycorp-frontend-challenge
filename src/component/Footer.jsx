import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
  AiOutlineMail,
  AiFillPhone,
} from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";

const Footer = () => {
  const socialStyle =
    "m-3 rounded-full cursor-pointer p-2 text-white text-2xl";
  return (
    <div className="flex flex-col md:flex-row items-center justify-around p-2 bg-SlateGrey text-white">
      <div className="flex-1 flex flex-col p-2">
        <h1 className="text-[25px]">E-COMMERCE SITE</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
          soluta quis porro eveniet. Nulla modi, quas unde eaque vel, quaerat
          repellendus dignissimos iure itaque architecto pariatur quia a eveniet
          veniam?
        </p>
        <div className="flex items-center justify-center mt-3 self-start">
          <div className={socialStyle}>
            <AiFillFacebook />
          </div>
          <div className={socialStyle}>
            <AiFillInstagram />
          </div>
          <div className={socialStyle}>
            <AiOutlineTwitter />
          </div>
          <div className={socialStyle}>
            <FaPinterest />
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col p-2 md:ml-4">
        <div className="flex m-3">
          <GrLocation />
          <p className="pl-3">India</p>
        </div>
        <div className="flex m-3">
          <AiFillPhone />
          <p className="pl-3">+91 123456789</p>
        </div>
        <div className="flex m-3">
          <AiOutlineMail />
          <p className="pl-3">abcde@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
