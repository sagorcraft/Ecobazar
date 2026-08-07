import React from "react";
import Container from "./layouts/Container";
import BannarOne from "../assets/images/bannarone.webp";
import BannarTwo from "../assets/images/bannartwo.webp";
import BannarThree from "../assets/images/bannarthree.webp";
import CountdownTimer from "./CountdownTimer";
import { HiArrowRight } from "react-icons/hi2";

const Bannar = () => {
  return (
    <section>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
          {/* Card 1: Sale of the Month */}
          <div className="group">
            <div
              className="relative overflow-hidden rounded-xl h-[420px] flex justify-center text-center p-6 bg-cover bg-center cursor-pointer group-hover:scale-[1.02] transition-all duration-300"
              style={{ backgroundImage: `url(${BannarOne})` }}
            >
              <div className="absolute top-8 flex flex-col items-center gap-3 w-full px-4 z-10">
                <span className="text-white/80 text-[12px] font-semibold tracking-widest uppercase">
                  Best Deals
                </span>
                <h3 className="text-white text-[28px] md:text-[32px] font-bold leading-tight">
                  Sale of the Month
                </h3>

                {/* Countdown Timer */}
                <div>
                  <CountdownTimer
                    textColor="text-white"
                    labelColor="text-[#ffffff]"
                  />
                </div>

                <button className="mt-2 bg-white text-[#00B207] hover:bg-[#00B207] hover:text-white px-6 py-2.5 rounded-full text-[14px] font-semibold flex items-center gap-2 transition-all duration-300 shadow-md">
                  Shop Now <HiArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Low-Fat Meat */}
          <div className="group">
            <div
              className="relative overflow-hidden rounded-xl h-[420px] flex justify-center text-center p-6 bg-cover bg-center cursor-pointer group-hover:scale-[1.02] transition-all duration-300"
              style={{ backgroundImage: `url(${BannarTwo})` }}
            >
              <div className="absolute top-8 flex flex-col items-center gap-2 w-full px-4 z-10">
                <span className="text-white/80 text-[12px] font-semibold tracking-widest uppercase">
                  85% Fat Free
                </span>
                <h3 className="text-white text-[28px] md:text-[32px] font-bold leading-tight">
                  Low-Fat Meat
                </h3>
                <p className="text-white text-[15px] font-medium my-1">
                  Started at{" "}
                  <span className="text-[#FF8A00] font-bold">$79.99</span>
                </p>

                <button className="mt-2 bg-white text-[#00B207] hover:bg-[#00B207] hover:text-white px-6 py-2.5 rounded-full text-[14px] font-semibold flex items-center gap-2 transition-all duration-300 shadow-md">
                  Shop Now <HiArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: 100% Fresh Fruit */}
          <div className="group">
            <div
              className="relative overflow-hidden rounded-xl h-[420px] flex justify-center text-center p-6 bg-cover bg-center cursor-pointer group-hover:scale-[1.02] transition-all duration-300"
              style={{ backgroundImage: `url(${BannarThree})` }}
            >
              <div className="absolute top-8 flex flex-col items-center gap-2 w-full px-4 z-10">
                <span className="text-[#1A1A1A]/70 text-[12px] font-semibold tracking-widest uppercase">
                  Summer Sale
                </span>
                <h3 className="text-[#1A1A1A] text-[28px] md:text-[32px] font-bold leading-tight">
                  100% Fresh Fruit
                </h3>
                <div className="flex items-center gap-2 my-1">
                  <span className="text-[#1A1A1A] text-[14px] font-medium">
                    Up to
                  </span>
                  <span className="bg-[#1A1A1A] text-[#FF8A00] text-[14px] font-bold px-3 py-1 rounded">
                    64% OFF
                  </span>
                </div>

                <button className="mt-2 bg-white text-[#00B207] hover:bg-[#00B207] hover:text-white px-6 py-2.5 rounded-full text-[14px] font-semibold flex items-center gap-2 transition-all duration-300 shadow-md">
                  Shop Now <HiArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Bannar;