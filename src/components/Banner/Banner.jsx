import React from 'react'
import Container from '../layouts/Container'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import BannerOne from '../../assets/images/banner-one.webp'
import BannerTwo from '../../assets/images/banner-two.webp'
import BannerThree from '../../assets/images/banner-three.webp'
import BannerRsOne from '../../assets/images/bannerRs-one.webp'
import BannerRsTwo from '../../assets/images/bannerRs-two.webp'

const Banner = () => {
  let settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    fade: true,
  };
  return (
    <Container>
      <div className='flex justify-between py-6'>
        <div className='max-w-[872px] w-full mr-6'>
          {/* left side slider start */}
          <Slider {...settings}>
            <div>
              <img src={BannerOne} alt="Banner One" className='w-full rounded-xl block' />
            </div>
            <div>
              <img src={BannerTwo} alt="Banner One" className='w-full rounded-xl block' />
            </div>
            <div>
              <img src={BannerThree} alt="Banner One" className='w-full rounded-xl block' />
            </div>
          </Slider>
        </div>

        {/* right side banner item start */}
        <div className='flex flex-col'>
          <div className='mb-6'>
            <img src={BannerRsOne} alt="Banner Right One" className='w-full rounded-xl block' />
          </div>
          <div>
            <img src={BannerRsTwo} alt="Banner Right Two" className='w-full rounded-xl block' />
          </div>
        </div>
      </div>
    </Container>

  )
}

export default Banner