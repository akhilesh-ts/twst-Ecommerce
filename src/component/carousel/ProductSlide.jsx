import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CiHeart } from "react-icons/ci";
import { IoBagAddOutline } from "react-icons/io5";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ProductSlide = ({ text, items, slider }) => {
  console.log(items);

  return (
    <>
      <h1 className="text-2xl font-thin mb-6">{text}</h1>
      <Carousel responsive={responsive}>
        {slider === "Categories" &&
          items &&
          items.map((item) => (
            <div
              key={item?.id}
              className="w-full md:w-56  lg:w-64 lg:h-70 mr-11 bg-red-400 rounded-lg relative  overflow-hidden group"
            >
              <img
                src={item?.img}
                alt=""
                srcSet=""
                className="rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              <button className=" font-semibold px-6 py-2  border-solid border-2 border-white text-sm text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {item?.name}
              </button>
            </div>
          ))}
        {slider === "BestSeller" &&
          items &&
          items.map((item) => (
            <div className="w-full md:w-56 lg:w-64 bg-white rounded-lg overflow-hidden relative group">
              <div className="relative">
                <img
                  src={item?.img}
                  alt="Product"
                  className="w-full h-74 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />

                <div className="absolute top-2 left-2 bg-white text-black px-2 py-1 rounded text-xs font-semibold">
                  40% OFF
                </div>

                <button className="absolute top-2 right-2 bg-white p-1 rounded-full cursor-pointer">
                  <CiHeart className="bg- hover:text-red-500" size={18} />
                </button>

                <button className="flex items-center gap-3 md:gap-1 lg:gap-3  absolute left-1/2 bottom-4 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out bg-white text-black py-3 px-3  md:py-2 md:px-2  lg:py-3 lg:px-3 text-sm font-thin">
                  <IoBagAddOutline /> ADD TO BAG
                </button>
              </div>

              <div className="p-4 flex flex-col gap-2">
                <h2 className="text-sm font-light text-gray-800">
                  Alto White Pique Polo
                </h2>

                <p className="text-xs text-red-500">New Dawn Sale</p>

                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-gray-800 border border-gray-300"></div>
                    <div className="w-5 h-5 bg-gray-400 border border-gray-300"></div>
                    <div className="w-5 h-5 bg-brown-600 border border-gray-300"></div>
                    <div className="w-5 h-5 bg-red-500 border border-gray-300"></div>

                    <p className="text-xs text-gray-500 ml-2">more..</p>
                  </div>

                  <p className="text-lg font-light text-gray-800">₹1,794</p>
                </div>
              </div>
            </div>
          ))}
      </Carousel>
    </>
  );
};

export default ProductSlide;
