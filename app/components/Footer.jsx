import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="relative dark:bg-[#101010] bg-[#F4F4F4] border-t">
      <div className="grid place-items-center py-2">
        <p className="text-[#3BE55A] py-[0.15rem]">
          MJP{" "}
          <span className="dark:text-[#F4F4F4] text-[#101010]">Portfolio</span>
        </p>
        <p className="py-[0.15rem]">
          Designed by <a className="text-[#3BE55A]">Mark Jethro Peña</a>
        </p>
        <p className="py-[0.15rem]">Valenzuela, Philippines</p>
        <div className="grid grid-cols-5 gap-3 cursor-pointer my-6">
          <div className="rounded-full cursor-pointer hover:text-[#1AA333]">
            <FaLinkedinIn />
          </div>
          <div className="rounded-full cursor-pointer hover:text-[#1AA333]">
            <FaGithub />
          </div>
          <div className="rounded-full cursor-pointer hover:text-[#1AA333]">
            <FaTwitter />
          </div>
          <div className="rounded-full cursor-pointer hover:text-[#1AA333]">
            <AiOutlineMail />
          </div>
          <div className="rounded-full cursor-pointer hover:text-[#1AA333]">
            <BsFacebook />
          </div>
        </div>
      </div>
    </div>
  );
}
