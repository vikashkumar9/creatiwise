import React, { useState } from "react";
import logo from "../assets/logo.png";
import Sidebar from "./Sidebar";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-black">
      <nav className="navbar px-[10%] py-8 hidden md:flex justify-between items-center">
        <div className="logo">
          <img
            alt="logo"
            loading="lazy"
            width="46"
            height="32"
            decoding="async"
            src={logo}
            style={{ color: "transparent" }}
          />
        </div>
        <div>
          <ul className="flex">
            <li className="syne-text py-2 px-6 rounded-3xl cursor-pointer bg-[#FFFFFF] text-[#010208]">
              Home
            </li>
            <li className="syne-text py-2 px-6 rounded-3xl text-white cursor-pointer">
              About
            </li>
            <li className="syne-text py-2 px-6 rounded-3xl text-white cursor-pointer">
              Projects
            </li>
            <li className="syne-text py-2 px-6 rounded-3xl text-white cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
        <div className="syne-text px-6 py-2 rounded-3xl border text-white border-[#FFFFFF] cursor-pointer">
          HIRE ME
        </div>
      </nav>
      <nav className="px-6 py-4 flex md:hidden justify-between items-center">
        <div className="logo">
          <img
            alt="logo"
            loading="lazy"
            width="46"
            height="32"
            decoding="async"
            src={logo}
            style={{ color: "transparent" }}
          />
        </div>
        <button
          className="text-white text-2xl"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </nav>
      {isMenuOpen && <Sidebar setMenuOpen={setMenuOpen} />}
    </div>
  );
}

export default Header;
