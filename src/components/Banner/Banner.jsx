import React from 'react'
import Container from '../layouts/Container'
import BannerOne from '../../assets/images/banner-one.webp'
import BannerTwo from '../../assets/images/banner-two.webp'
import BannerThree from '../../assets/images/banner-three.webp'
import BannerRsOne from '../../assets/images/bannerRs-one.webp'
import BannerRsFive from '../../assets/images/bannerRs-five.webp'
import BannerRsTwo from '../../assets/images/bannerRs-two.webp'
import BannerRsThree from '../../assets/images/bannerRs-three.webp'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Pagination,Scrollbar,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
 
  return (
    <Container>
      <div className='flex justify-between py-6'>
        <div className='max-w-[872px] mr-6'>
          {/* left side slider start */}

          <Swiper 
            pagination={{
              clickable:true,
            }}
            scrollbar={{
              hide: true,
            }}
            autoplay={true}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
                prevEl: '.prev-arrow',
                nextEl: '.next-arrow',
            }}
            modules={[Navigation,Pagination,Autoplay]}
          >
            <SwiperSlide>
              <img src={BannerOne} alt="Banner One" className='w-full rounded-xl block' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={BannerTwo} alt="Banner One" className='w-full rounded-xl block' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={BannerThree} alt="Banner One" className='w-full rounded-xl block' />
            </SwiperSlide>
            <div className='prev-arrow'><FaArrowLeft /></div>
            <div className='next-arrow'><FaArrowRight /></div>
          </Swiper>

        </div>

        {/* right side banner item start */}
        <div className='flex flex-col max-w-[423px]'>
          <div>
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              direction={'vertical'}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
              className="rightBannerSwiper"
            >
              <SwiperSlide>
                <img src={BannerRsOne} alt="Banner Right One" className='w-full rounded-xl block' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={BannerRsTwo} alt="Banner Right Two" className='w-full rounded-xl block' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={BannerRsThree} alt="Banner Right Three" className='w-full rounded-xl block' />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className='mt-6'>
            <img src={BannerRsFive} alt="Banner Right Five" className='w-full rounded-xl block' />
          </div>
        </div>
      </div>
    </Container>

  )
}

export default Banner