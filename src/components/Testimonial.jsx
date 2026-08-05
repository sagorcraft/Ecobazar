import React, { useState } from 'react'
import Container from './layouts/Container'
import TestOne from '../assets/images/testone.webp'
import TestTwo from '../assets/images/testtwo.webp'
import TestThree from '../assets/images/testthree.webp'
import { ArrowLeft, ArrowRight, Quote, Star } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const testimonials = [
  {
    image: TestOne,
    name: 'Robert Fox',
    role: 'Customer',
    text: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
  },
  {
    image: TestTwo,
    name: 'Dianne Russell',
    role: 'Customer',
    text: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
  },
  {
    image: TestThree,
    name: 'Eleanor Pena',
    role: 'Customer',
    text: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
  },
  {
    image: TestOne,
    name: 'Jenny Wilson',
    role: 'Customer',
    text: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
  },
  {
    image: TestTwo,
    name: 'Cody Fisher',
    role: 'Customer',
    text: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
  },
  {
    image: TestThree,
    name: 'Savannah Nguyen',
    role: 'Customer',
    text: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
  },
]

const Testimonial = () => {
  const [activeBtn, setActiveBtn] = useState('next') // 'next' | 'prev'

  return (
    <section className='bg-[#F2F2F2] py-15'>
      <Container>
        <div>
          <div className='flex items-center justify-between mb-8'>
            <h3 className='font-pop font-semibold text-[32px] text-[#1A1A1A]'>Client Testimonials</h3>
            <div className='flex items-center gap-3'>
              <button
                onClick={() => setActiveBtn('prev')}
                className={`testimonial-prev w-11 h-11 rounded-full flex items-center justify-center shadow-sm transition-colors ${
                  activeBtn === 'prev' ? 'bg-primary' : 'bg-white'
                }`}
              >
                <ArrowLeft
                  size={18}
                  className={activeBtn === 'prev' ? 'text-white' : 'text-[#1A1A1A]'}
                />
              </button>
              <button
                onClick={() => setActiveBtn('next')}
                className={`testimonial-next w-11 h-11 rounded-full flex items-center justify-center transition-colors ${
                  activeBtn === 'next' ? 'bg-primary' : 'bg-white'
                }`}
              >
                <ArrowRight
                  size={18}
                  className={activeBtn === 'next' ? 'text-white' : 'text-[#1A1A1A]'}
                />
              </button>
            </div>
          </div>

          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={3}
            loop={true}
            watchOverflow={false}
            navigation={{
              prevEl: '.testimonial-prev',
              nextEl: '.testimonial-next',
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className='w-full bg-white rounded-2xl p-6'>
                  <Quote size={32} className='text-[#B7E4B5] fill-[#B7E4B5]' />
                  <p className='font-pop text-sm text-[#4D4D4D] leading-relaxed mt-4 mb-6'>
                    {item.text}
                  </p>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                      <img
                        src={item.image}
                        alt={item.name}
                        className='w-11 h-11 rounded-full object-cover'
                      />
                      <div>
                        <h4 className='font-pop font-semibold text-sm text-[#1A1A1A]'>
                          {item.name}
                        </h4>
                        <p className='font-pop text-xs text-[#808080]'>{item.role}</p>
                      </div>
                    </div>
                    <div className='flex items-center gap-0.5'>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={14} className='text-[#FF9F19] fill-[#FF9F19]' />
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  )
}

export default Testimonial