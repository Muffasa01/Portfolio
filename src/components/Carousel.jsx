import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaHtml5 } from "react-icons/fa";
import reactSvg from "../assets/react.svg";
import cssSvg from "../assets/css-svgrepo-com.svg";
import expressSvg from "../assets/express-svgrepo-com.svg";
import gqlSvg from "../assets/graphql-svgrepo-com.svg";
import htmlSvg from "../assets/html-5-svgrepo-com.svg";
import mongoDb from "../assets/mongodb-logo-svgrepo-com.svg";
import tailwindSvg from "../assets/tailwindcss-icon-svgrepo-com.svg";

const CarouselC = () => {
  
  return (
    <div className="px-4 py-4 transition-all duration-300 ease-in-out absolute md:bottom-0 inset-x-0 ">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={1}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        customTransition="all 7s linear"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={true}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 6,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 2,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 3,
            partialVisibilityGutter: 30
          }
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable
        transitionDuration={9000}
      >
        <div className="h-15 w-40 border border-transparent flex items-center justify-center rounded-lg relative transition-all duration-300">
          <img src={reactSvg} alt="" />
          <div className="bg-black hidden  text-white opacity-50 absolute inset-0 rounded-lg hover:flex items-center justify-center">
            <span className="font-semibold"> Good </span>
          </div>
        </div>
        <div className="h-15 w-40 border border-transparent  flex items-center justify-center rounded-lg relative transition-all duration-300">
          <img src={cssSvg} alt="" className="size-9" />
          <div className="bg-black hidden  text-white opacity-50 absolute inset-0 rounded-lg hover:flex items-center justify-center">
            <span className="font-semibold"> Good </span>
          </div>
        </div>
        <div className="h-15 w-40 border border-transparent  flex items-center justify-center rounded-lg relative transition-all duration-300">
          <img src={expressSvg} alt="" className="size-9" />
          <div className="bg-black hidden  text-white opacity-50 absolute inset-0 rounded-lg hover:flex items-center justify-center">
            <span className="font-semibold"> Good </span>
          </div>
        </div>
        {/* <div className="h-15 w-40 border border-transparent  flex items-center justify-center rounded-lg relative transition-all duration-300">
          <img src={js02} alt="" className="size-9" />
          <div className="bg-black hidden  text-white opacity-50 absolute inset-0 rounded-lg hover:flex items-center justify-center">
            <span className="font-semibold"> Good </span>
          </div>
        </div> */}
        <div className="h-15 w-40 border border-transparent  flex items-center justify-center rounded-lg relative transition-all duration-300">
          <img src={gqlSvg} alt="" className="size-9" />
          <div className="bg-black hidden  text-white opacity-50 absolute inset-0 rounded-lg hover:flex items-center justify-center">
            <span className="font-semibold"> Good </span>
          </div>
        </div>
        <div className="h-15 w-40 border border-transparent flex items-center justify-center rounded-lg relative transition-all duration-300">
          <img src={htmlSvg} alt="" className="size-9" />
          <div className="bg-black hidden  text-white opacity-50 absolute inset-0 rounded-lg hover:flex items-center justify-center">
            <span className="font-semibold"> Good </span>
          </div>
        </div>
        <div className="h-15 w-40 border border-transparent  flex items-center justify-center rounded-lg relative transition-all duration-300">
          <img src={tailwindSvg} alt="" className="size-9" />
          <div className="bg-black hidden  text-white opacity-50 absolute inset-0 rounded-lg hover:flex items-center justify-center">
            <span className="font-semibold"> Good </span>
          </div>
        </div>
        <div className="h-15 w-40 border flex border-transparent  items-center justify-center rounded-lg relative transition-all duration-300">
          <img src={mongoDb} alt="" className="size-20" />
          <div className="bg-black hidden  text-white opacity-50 absolute inset-0 rounded-lg hover:flex items-center justify-center">
            <span className="font-semibold"> Good </span>
          </div>
        </div>
        
        {/* <div className="h-15 w-40 border border-transparent  flex items-center justify-center rounded-lg relative transition-all duration-300">
          <img src={js02} alt="" className="size-9" />
          <div className="bg-black hidden  text-white opacity-50 absolute inset-0 rounded-lg hover:flex items-center justify-center">
            <span className="font-semibold"> Good </span>
          </div>
        </div> */}
      </Carousel>
    </div>
  );
};

export default CarouselC;
