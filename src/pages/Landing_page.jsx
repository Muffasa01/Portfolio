import React from "react";
import Nav_bar from "../components/Nav_bar.jsx";
import CarouselC from "../components/Carousel.jsx";
import { Github, Facebook, Linkedin, Dot } from "lucide-react";
import immg from "../assets/IMG_4757.jpeg";
import { useNavigate } from "react-router-dom";

const Landing_page = () => {

  const navigate = useNavigate()
  return (
    <div className="relative min-h-screen bg-[#13222A]">
      <Nav_bar />
      <div className="relative pt-4">
        <div className="flex flex-col w-fit  gap-2 shadow-lg items-center rounded-md fixed top-55 right-4">
          <span className="hover:bg-[#1a2a31] transition-all duration-300 ease-in-out px-2 py-2 cursor-pointer rounded-md">
            <Linkedin color="#42D392" strokeWidth={0.75} />
          </span>
          <span className="hover:bg-[#1a2a31] transition-all duration-300 ease-in-out px-2 py-2 cursor-pointer rounded-md">
            <Facebook color="#42D392" strokeWidth={0.75} />
          </span>
          <span className="hover:bg-[#1a2a31]  transition-all duration-300 ease-in-out px-2 py-2 cursor-pointer rounded-md">
            <Github color="#42D392" strokeWidth={0.75} />
          </span>
        </div>
        <div className="w-full flex flex-col items-center md:mt-8 sm:mt-4 ">
          <div className="h-[153px] w-[153px] hover:animate-float bg-gradient-to-l from-[#42D392] to-blue-300 rounded-full flex items-center justify-center">
            <div className="h-[150px] w-[150px] rounded-full overflow-hidden">
              <img src={immg} alt="" className="object-cover size-fit" />
            </div>
          </div>
          <div className="text-center mt-5 ">
            <span className="block animate-fade-in text-3xl font-semibold bg-gradient-to-l from-[#42D392] to-blue-300 bg-clip-text text-transparent">
              Hi , I`m Rendani, a Fullstack Web Developer
            </span>
            <span className="block animate-fade-in-1 text-lg text-gray-400 font-semibold pt-4">
              I build fast , clean , simple and user-friendly websites that work
              flawlessly
            </span>
          </div>
          <span className="flex animate-fade-in-3 items-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-300 font-bold">
              Design
            </span>
            <Dot color="#42D392" size={34} />
            <span className="text-blue-400 font-bold">Code</span>
            <Dot color="#42D392" size={34} />
            <span className="text-blue-400 font-bold">Run</span>
            <Dot color="#42D392" size={34} />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-400 to-green-300 font-bold">
              Repeat
            </span>
          </span>
          <div className="pt-6">
            <button
              className="px-[1px] hover:animate-float animate-fade-in-4 rounded-md shadow-md border-transparent hover:bg-gradient-to-r transition-all duration-300 delay-150 ease-in-out cursor-pointer bg-clip-border bg-gradient-to-bl from-blue-400 to-green-300 py-[1px]"
              onClick={() => navigate("/contact")}
            >
              <div className="bg-[#13222A] text-gray-500 font-bold px-5 py-2 rounded-md">
                let`s Work
              </div>
            </button>
          </div>
        </div>
      </div>
      <CarouselC />
    </div>
  );
};

export default Landing_page;
