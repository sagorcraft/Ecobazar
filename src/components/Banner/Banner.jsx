import React from "react";
import Container from "../layouts/Container";
import BannerOne from "../../assets/images/banner-one.webp";
import BannerTwo from "../../assets/images/banner-two.webp";
import BannerThree from "../../assets/images/banner-three.webp";
import BannerRsOne from "../../assets/images/bannerRs-one.webp";
import BannerRsTwo from "../../assets/images/bannerRs-two.webp";
import BannerRsThree from "../../assets/images/bannerRs-three.webp";
import BannerRsFive from "../../assets/images/bannerRs-five.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="py-6 px-3 lg:px-0">
      <Container>
        {/* Main Layout using CSS Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left side slider start (Spans 8 columns on large screens) */}
          <div className="lg:col-span-8 relative group">
            <Swiper
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              navigation={{
                prevEl: ".prev-arrow",
                nextEl: ".next-arrow",
              }}
              modules={[Navigation, Pagination, Autoplay]}
              className="rounded-xl overflow-hidden h-full"
            >
              <SwiperSlide>
                <img
                  src={BannerOne}
                  alt="Banner One"
                  className="w-full h-full object-cover rounded-xl block"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={BannerTwo}
                  alt="Banner Two"
                  className="w-full h-full object-cover rounded-xl block"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={BannerThree}
                  alt="Banner Three"
                  className="w-full h-full object-cover rounded-xl block"
                />
              </SwiperSlide>

              {/* Navigation Arrows */}
              <div className="prev-arrow absolute top-1/2 left-4 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center cursor-pointer transition-all shadow-md">
                <FaArrowLeft className="text-gray-800" />
              </div>
              <div className="next-arrow absolute top-1/2 right-4 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center cursor-pointer transition-all shadow-md">
                <FaArrowRight className="text-gray-800" />
              </div>
            </Swiper>
          </div>

          {/* Right side banner items start (Spans 4 columns on large screens) */}
          <div className="lg:col-span-4 grid grid-cols-1 gap-6">
            {/* Top Vertical Swiper Box */}
            <div className="w-full rounded-xl overflow-hidden shadow-sm">
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                direction={"vertical"}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                loop={true}
                modules={[Pagination, Autoplay]}
                className="rightBannerSwiper h-[200px] sm:h-[240px] md:h-[280px] rounded-xl"
              >
                <SwiperSlide>
                  <img
                    src={BannerRsOne}
                    alt="Banner Right One"
                    className="w-full h-full object-cover rounded-xl block"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={BannerRsTwo}
                    alt="Banner Right Two"
                    className="w-full h-full object-cover rounded-xl block"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={BannerRsThree}
                    alt="Banner Right Three"
                    className="w-full h-full object-cover rounded-xl block"
                  />
                </SwiperSlide>
              </Swiper>
            </div>

            {/* Bottom Static Image Box */}
            <div className="w-full rounded-xl overflow-hidden shadow-sm">
              <img
                src={BannerRsFive}
                alt="Banner Right Five"
                className="w-full h-full object-cover rounded-xl block"
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Banner;