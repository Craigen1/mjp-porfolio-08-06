"use client";

import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { useState, useEffect } from "react";
import "../globals.css";
import Image from "next/image";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [nav, setNav] = useState(false);
  const [selectedTab, setSelectedTab] = useState([]);
  const [selectedTabMobile, setSelectedTabMobile] = useState([]);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  const currentTheme = theme === "system" ? theme : theme;

  const navbar = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/#about",
    },
    {
      name: "Projects",
      path: "/",
    },
    {
      name: "Skills",
      path: "/",
    },
    {
      name: "Contact",
      path: "/",
    },
  ];

  return (
    <main
      className={
        shadow
          ? "fixed dark:bg-[#101010] bg-[#FFFF] w-full h-14 md:h-[4.7rem] dark:shadow-md dark:shadow-[#171717] shadow-md z-50 ease-in-out duration-300"
          : "fixed w-full h-14 md:h-20 z-50"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 ">
        <Link href="/">
          <h2 className="font-bold text-[#3BE55A] text-3xl mx-10">MJP</h2>
        </Link>
        <div className="flex justify-between items-center">
          <ul className="hidden md:flex gap-10 mx-5">
            {navbar.map((data, index) => {
              return (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedTab(data.name)}
                >
                  <Link href={data.path}>
                    <div className="font-medium">{data.name}</div>
                    {data.name === selectedTab ? (
                      <motion.li className="nav-btn" layoutId="nav-btn" />
                    ) : null}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
          <div className="hidden md:flex">
            {currentTheme === "dark" ? (
              <button className="px-3" onClick={() => setTheme("light")}>
                <Image src="/sun.svg" width={25} height={25} alt="sun" />
              </button>
            ) : (
              <button className="px-3" onClick={() => setTheme("dark")}>
                <Image src="/moon.svg" width={23} height={23} alt="moon" />
              </button>
            )}
          </div>

          {/*Mobile Navigation Bar */}
          <div className="md:hidden px-3">
            {currentTheme === "dark" ? (
              <button onClick={() => setTheme("light")}>
                <Image src="/sun.svg" width={27} height={27} alt="sun" />
              </button>
            ) : (
              <button onClick={() => setTheme("dark")}>
                <Image src="/moon.svg" width={25} height={25} alt="moon" />
              </button>
            )}
          </div>
          <div
            onClick={() => setNav(!nav)}
            className="md:hidden px-3 mb-2 cursor-pointer hover:scale-110"
          >
            <AiOutlineMenu size={22} />
          </div>
        </div>
      </div>
      <div
        className={nav ? "fixed top-0 left-0 bg-black/70 w-full h-screen" : ""}
      >
        <div
          className={
            nav
              ? "fixed top-0 left-0 w-screen ssmm:h-[57%] xxsm:h-[63%] smm:h-[47%] xsm:h-[55%] h-[45%] bg-[#E4E4E4] dark:bg-[#171717] p-10 ease-in-out duration-500"
              : "fixed left-0 top-[-100%] ssmm:h-[57%] xxsm:h-[63%] smm:h-[47%] xsm:h-[55%] h-[45%] w-screen bg-[#E4E4E4] dark:bg-[#171717] p-10 ease-in-out duration-500"
          }
        >
          <div>
            <div className="flex justify-between w-full">
              <h2 className="text-2xl font-bold text-[#3BE55A]">MJP</h2>
              <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer hover:scale-75"
              >
                <AiOutlineClose size={20} />
              </div>
            </div>
            <div>
              <ul className="grid place-items-center gap-6 my-5">
                {navbar.map((item, index) => {
                  return (
                    <motion.li
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSelectedTabMobile(item.name)}
                    >
                      <Link href={item.path} onClick={() => setNav(!nav)}>
                        <div className="font-medium">{item.name}</div>
                        {item.name === selectedTabMobile ? (
                          <motion.li className="nav-btn" layoutId="nav-btn" />
                        ) : null}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
              <div className="my-7">
                <p className="uppercase tracking-wider">get in touch</p>
                <div className="flex flex-row gap-3 my-2">
                  <FaGithub className="cursor-pointer hover:text-[#1AA333]" />
                  <FaLinkedinIn className="cursor-pointer hover:text-[#1AA333]" />
                  <FaTwitter className="cursor-pointer hover:text-[#1AA333]" />
                  <AiOutlineMail className="cursor-pointer hover:text-[#1AA333]" />
                  <BsFacebook className="cursor-pointer hover:text-[#1AA333]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
