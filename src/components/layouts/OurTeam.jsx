import React, { useState } from 'react';
import TeamOne from '../../assets/images/teamone.webp';
import TeamTwo from '../../assets/images/teamtwo.webp';
import TeamThree from '../../assets/images/teamthree.webp';
import TeamFour from '../../assets/images/teamfour.webp';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Container from './Container';

const teamData = [
  { img: TeamOne, name: 'Jenny Wilson', role: 'Ceo & Founder' },
  { img: TeamFour, name: 'Jane Cooper', role: 'Worker' },
  { img: TeamThree, name: 'Cody Fisher', role: 'Security Guard' },
  { img: TeamTwo, name: 'Robert Fox', role: 'Senior Farm Manager' },
];

// লুপ স্মুথ রাখার জন্য ডেটা ডুপ্লিকেট করা হয়েছে
const team = [...teamData, ...teamData];

const OurTeam = () => {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  return (
    <div className="bg-[#F8F8F8] py-16">
      <Container>
        <div className="text-center max-w-lg mx-auto mb-12">
          <h2 className="text-hsize font-semibold mb-3">Our Awesome Team</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Pellentesque a ante suscipit, luctus tellus vel eget arcu. Nulla
            sem convallis ut lectus tincidunt bibendum.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {/* Custom Prev Button */}
          <button
            ref={(node) => setPrevEl(node)}
            className="hidden md:flex shrink-0 w-10 h-10 rounded-full bg-white shadow items-center justify-center hover:bg-primary hover:text-white transition cursor-pointer z-10 select-none"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Swiper Slider */}
          <div className="flex-1 overflow-hidden">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              loop={true}
            //   autoplay={{
            //     delay: 3000,
            //     disableOnInteraction: false,
            //   }}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              navigation={{
                prevEl,
                nextEl,
              }}
              className="mySwiper"
            >
              {team.map(({ img, name, role }, i) => (
                <SwiperSlide key={i}>
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                    <img
                      src={img}
                      alt={name}
                      className="w-full h-56 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="text-sm font-semibold">{name}</h4>
                      <p className="text-xs text-gray-400">{role}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Custom Next Button */}
          <button
            ref={(node) => setNextEl(node)}
            className="hidden md:flex shrink-0 w-10 h-10 rounded-full bg-white shadow items-center justify-center hover:bg-primary hover:text-white transition cursor-pointer z-10 select-none"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </Container>
    </div>
  );
};

export default OurTeam;