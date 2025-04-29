import React, { useState } from "react";
import { Menu, Mail } from "lucide-react";
import logo from "../assets/Logo .svg";
import { useNavigate } from "react-router-dom";

const Nav_bar = () => {
  const [showBar, setShowbar] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="bg-[#13222A] relative w-full border-b-[1px] border-gray-800 h-[60px] text-white flex items-center justify-between px-6 ">
      <img src={logo} alt="" className="h-[40px] cursor-pointer" />
      <div className="transition-all duration-300 ease-in-out">
        <span className="md:hidden " onClick={() => setShowbar(!showBar)}>
          <Menu />
        </span>
        {showBar && (
          <div
            className={`absolute md:hidden py-1 bg-[#1a2a31] z-30 shadow-lg  top-[60px] border-top-[1px] border-[#42D392] flex flex-col  right-0 h-[calc(100vh-60px)] left-[50%]`}
          >
            <span
              className="text-center py-2 font-semibold md:border-none opacity-50 hover:opacity-85 transition-all duration-300 ease-in-out border-l-1 border-transparent cursor-pointer hover:border-[#42D392]"
              onClick={() => navigate("/about")}
            >
              About
            </span>
            <span
              className="text-center py-2 font-semibold opacity-50 hover:opacity-85 transition-all duration-300 ease-in-out  border-l-1 border-transparent cursor-pointer hover:border-[#42D392]"
              onClick={() => navigate("/projects")}
            >
              projects
            </span>
            <span
              className="text-center py-2 font-semibold opacity-50 hover:opacity-85 transition-all duration-300 ease-in-out  border-l-1 border-transparent cursor-pointer hover:border-[#42D392]"
              onClick={() => navigate("/skills")}
            >
              skills
            </span>
            <span
              className="text-center py-2 font-semibold opacity-50 hover:opacity-85 transition-all duration-300 ease-in-out  border-l-1 border-transparent cursor-pointer hover:border-[#42D392]"
              onClick={() => navigate("/contacts")}
            >
              contact
            </span>
          </div>
        )}
        <div className=" hidden absolute bg-[#13222A] top-[60px] border-top-[1px]  md:flex flex-col right-0 h-[calc(100vh-60px)] left-[50%] md:static md:h-fit md:bg-transparent md:flex-row md:items-center md:gap-8">
          <span
            className="text-center py-2 font-semibold md:border-none opacity-80 hover:opacity-85 transition-all duration-300 ease-in-out border-l-1 cursor-pointer hover:text-[#42D392]"
            onClick={() => navigate("/about")}
          >
            About
          </span>
          <span
            className="text-center py-2 font-semibold opacity-80 hover:opacity-85 transition-all duration-300 ease-in-out  cursor-pointer hover:text-[#42D392]"
            onClick={() => navigate("/projects")}
          >
            projects
          </span>
          <span
            className="text-center py-2 font-semibold opacity-80 hover:opacity-85 transition-all duration-300 ease-in-out   cursor-pointer hover:text-[#42D392]"
            onClick={() => navigate("/skills")}
          >
            skills
          </span>
          <span
            className="text-center py-2 font-semibold opacity-80 hover:opacity-85 transition-all duration-300 ease-in-out  cursor-pointer hover:text-[#42D392]"
            onClick={() => navigate("/contact")}
          >
            <Mail size={17} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Nav_bar;
