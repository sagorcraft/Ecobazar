import React, { useState } from "react";
import Container from "./layouts/Container";
import { HiArrowSmallRight } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";
import CountdownTimer from "./CountdownTimer.jsx";
import { Link } from "react-router";

// ==========================================
// ১. স্টার রেটিং রেন্ডারার
// ==========================================
function renderStars(rating = 5) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} className="text-[#FF8A00] text-[12px]" />);
    } else if (i - 0.5 <= rating) {
      stars.push(
        <FaStarHalfAlt key={i} className="text-[#FF8A00] text-[12px]" />
      );
    } else {
      stars.push(<FaStar key={i} className="text-[#CCCCCC] text-[12px]" />);
    }
  }
  return stars;
}

// ==========================================
// ২. স্ট্যান্ডার্ড প্রোডাক্ট কার্ড
// ==========================================
const ProductCard = ({ pro, isBorderGrid = true }) => {
  const [isHovered, setIsHovered] = useState(false);
  const hasDiscount = pro.discountPercentage && pro.discountPercentage > 10;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`bg-white relative flex flex-col justify-between transition-all duration-300 p-4 ${
        isBorderGrid
          ? "border border-[#E6E6E6]"
          : "border border-[#E6E6E6] rounded-xl"
      } ${isHovered ? "border-[#00B207] z-10 shadow-lg" : ""}`}
    >
      {/* Discount Badge */}
      {hasDiscount && (
        <span className="absolute top-3 left-3 bg-[#EA4B48] text-white text-[12px] font-medium px-2 py-0.5 rounded z-10">
          Sale {Math.round(pro.discountPercentage)}%
        </span>
      )}

      {/* Quick Action Icons */}
      <div
        className={`absolute top-3 right-3 flex flex-col gap-2 transition-opacity duration-200 z-20 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <button className="w-8 h-8 bg-white border border-[#E6E6E6] rounded-full flex items-center justify-center text-[#1A1A1A] hover:bg-[#00B207] hover:text-white transition-colors">
          <CiHeart size={18} />
        </button>
        <button className="w-8 h-8 bg-white border border-[#E6E6E6] rounded-full flex items-center justify-center text-[#1A1A1A] hover:bg-[#00B207] hover:text-white transition-colors">
          <IoEyeOutline size={18} />
        </button>
      </div>

      {/* Product Image */}
      <div className="w-full h-[150px] my-2 flex items-center justify-center overflow-hidden">
        <img
          src={pro.thumbnail || pro.image}
          alt={pro.title || pro.name}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Product Info */}
      <div>
        <h3
          className={`font-pop text-[14px] font-medium mb-1 truncate transition-colors ${
            isHovered ? "text-[#2C742F]" : "text-[#1A1A1A]"
          }`}
        >
          {pro.title || pro.name}
        </h3>

        <div className="flex items-end justify-between mt-2">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-[15px] text-[#1A1A1A]">
                ${pro.price}
              </span>
              {hasDiscount && (
                <span className="text-[12px] text-[#999999] line-through">
                  $
                  {(
                    pro.price +
                    (pro.price * pro.discountPercentage) / 100
                  ).toFixed(2)}
                </span>
              )}
            </div>
            <div className="flex items-center gap-0.5 mt-1">
              {renderStars(pro.rating)}
            </div>
          </div>

          <button
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
              isHovered
                ? "bg-[#00B207] text-white"
                : "bg-[#F2F2F2] text-[#1A1A1A]"
            }`}
          >
            <HiOutlineShoppingBag size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// ৩. মেইন ProductShowcase কম্পোনেন্ট
// ==========================================
const ProductShowcase = ({ title, allData = [], viewAllLink, type }) => {
  
  /* --- ১. Related Products View (ছবি অনুযায়ী ডিজাইন) --- */
  if (type === "related") {
    return (
      <div className="py-12 bg-white">
        <Container>
          {/* Centered Title */}
          <h2 className="font-pop font-semibold text-[24px] md:text-[32px] text-[#1A1A1A] text-center mb-8">
            {title}
          </h2>

          {/* 4-Column Grid with Gaps & Individual Rounded Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {allData.map((pro) => (
              <ProductCard key={pro.id} pro={pro} isBorderGrid={false} />
            ))}
          </div>
        </Container>
      </div>
    );
  }

  // হেডার সেকশন (Standard)
  const SectionHeader = () => (
    <div className="flex items-center justify-between mb-6">
      <h2 className="font-pop font-semibold text-[24px] md:text-[32px] text-[#1A1A1A]">
        {title}
      </h2>
      <Link
        to={viewAllLink || "#"}
        className="flex items-center gap-2 font-pop font-medium text-[16px] text-[#00B207] hover:underline"
      >
        View All <HiArrowSmallRight className="text-[20px]" />
      </Link>
    </div>
  );

  /* --- ২. ক্যাটাগরি ভিউ --- */
  if (type === "category") {
    return (
      <div className="py-8">
        <Container>
          <SectionHeader />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {allData.map((item) => (
              <div
                key={item.id}
                className="border border-[#E6E6E6] hover:border-primary hover:shadow-lg hover:text-primary rounded-lg p-4 bg-white flex flex-col items-center justify-center transition-all duration-300 cursor-pointer text-[#1A1A1A]"
              >
                <div className="w-[120px] h-[100px] mb-3 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.image || item.thumbnail}
                    alt={item.name || item.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h3 className="font-pop font-medium text-[14px] text-center truncate w-full">
                  {item.name || item.title}
                </h3>
              </div>
            ))}
          </div>
        </Container>
      </div>
    );
  }

  /* --- ৩. ফিচার্ড ও পপুলার প্রোডাক্টস (ডিফল্ট) --- */
  return (
    <div className="py-8">
      <Container>
        <SectionHeader />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 border-t border-l border-[#E6E6E6]">
          {allData.map((pro) => (
            <ProductCard key={pro.id} pro={pro} isBorderGrid={true} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ProductShowcase;