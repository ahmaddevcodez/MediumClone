import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const slides = [
  "Slide 1",
  "Slide 2",
  "Slide 3",
  "Slide 4",
  "Slide 5",
  "Slide 6",
  "Slide 7",
  "Slide 8",
  "Slide 9",
];

const DashSwiper = () => {
  const [activeSlide, setActiveSlide] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const swiperRef = useRef(null);

  const handleSlideClick = (index) => {
    setActiveSlide(index);
  };

  useEffect(() => {
    const swiperElement = swiperRef.current;
    const handleScroll = () => {
      if (swiperElement) {
        const rect = swiperElement.getBoundingClientRect();
        if (rect.top <= 0) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="">
      <div ref={swiperRef} className="w-full relative">
        <div
          className={`transition-all duration-300 ${
            isSticky
              ? "fixed top-0 left-0 right-0  z-50 bg-white shadow-md md:w-full w-full pb-1 rounded-md"
              : ""
          }`}
        >
          <div className="max-w-[640px] mx-auto">
            <Swiper
              slidesPerView={6}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
              breakpoints={{
                100: { slidesPerView: 1, spaceBetween: 2 },
                380: { slidesPerView: 1, spaceBetween: 5 },
                640: { slidesPerView: 2, spaceBetween: 5 },
                768: { slidesPerView: 4, spaceBetween: 5 },
                1025: { slidesPerView: 4, spaceBetween: 5 },
                1441: { slidesPerView: 5, spaceBetween: 10 },
              }}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index} className="pt-4 ">
                  <div
                    onClick={() => handleSlideClick(index)}
                    className={`second-font text-[14px] cursor-pointer font-medium leading-normal text-primarylink ${
                      activeSlide === index
                        ? "text-black border-b-2 border-black pb-4"
                        : "border-b-2 border-primarygray95 pb-4"
                    }`}
                  >
                    {slide}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      {isSticky && <div style={{ height: swiperRef.current?.offsetHeight }} />}
    </div>
  );
};

export default DashSwiper;
