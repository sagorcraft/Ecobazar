import React, { useState } from "react";
import Container from "./layouts/Container";
import { HiArrowSmallRight } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";
import CountdownTimer from "./CountdownTimer.jsx";
import { Link } from "react-router";

const ProductShowcase = ({ title, allData = [], viewAllLink, type }) => {
  const [hoveredId, setHoveredId] = useState(null);

  function renderStars(rating = 5) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-[#FF8A00] text-[12px]" />);
      } else if (i - 0.5 <= rating) {
        stars.push(
          <FaStarHalfAlt key={i} className="text-[#FF8A00] text-[12px]" />,
        );
      } else {
        stars.push(<FaStar key={i} className="text-[#CCCCCC] text-[12px]" />);
      }
    }
    return stars;
  }

  /* =========================================================
      ১. ক্যাটাগরি ভিউ (POPULAR CATEGORIES
  ========================================================= */
  if (type === "category") {
    return (
      <div className="py-8">
        <Container>
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

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {allData.map((item) => {
              const isHovered = hoveredId === item.id;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`border rounded-lg p-4 bg-white flex flex-col items-center justify-center transition-all duration-300 cursor-pointer ${
                    isHovered
                      ? "border-primary shadow-lg text-primary"
                      : "border-[#E6E6E6] text-[#1A1A1A]"
                  }`}
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
              );
            })}
          </div>
        </Container>
      </div>
    );
  }

  /* =========================================================
      ২. হট ডিলস ভিউ (HOT DEALS
  ========================================================= */
  if (type === "hotdeal") {
    const featuredDeal = allData[0];
    const otherDeals = allData.slice(1, 12);

    return (
      <div className="py-8 bg-[#F7F7F7]">
        <Container>
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

          {/* গ্রিড লেআউট - ১ম কার্ড ২x২ স্প্যান করবে */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 border-t border-l border-[#E6E6E6]">
            {/* FEATURED BIG CARD */}
            {featuredDeal && (
              <div
                onMouseEnter={() => setHoveredId(featuredDeal.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`col-span-1 sm:col-span-2 row-span-2 border border-[#E6E6E6] p-6 bg-white flex flex-col justify-between relative transition-all duration-300 ${
                  hoveredId === featuredDeal.id
                    ? "border-primary z-10 shadow-lg"
                    : ""
                }`}
              >
                {/* Badges */}
                <div className="flex gap-2 mb-2">
                  {featuredDeal.discountPercentage &&
                    featuredDeal.discountPercentage > 10 && (
                      <span className="bg-[#EA4B48] text-white text-[12px] font-medium px-2.5 py-1 rounded">
                        Sale {Math.round(featuredDeal.discountPercentage)}%
                      </span>
                    )}
                  <span className="bg-[#00B207] text-white text-[12px] font-medium px-2.5 py-1 rounded">
                    Best Sale
                  </span>
                </div>

                {/* Big Image */}
                <div className="w-full h-[240px] my-4 flex items-center justify-center">
                  <img
                    src={featuredDeal.thumbnail || featuredDeal.image}
                    alt={featuredDeal.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Actions Hover (Mobile/Action) */}
                <div className="flex items-center gap-3 my-3">
                  <button className="w-10 h-10 bg-[#F2F2F2] hover:bg-[#00B207] hover:text-white rounded-full flex items-center justify-center transition-colors">
                    <CiHeart size={20} />
                  </button>
                  <button className="flex-1 bg-[#00B207] hover:bg-[#2C742F] text-white py-2.5 rounded-full text-[14px] font-semibold flex items-center justify-center gap-2 transition-colors">
                    Add to Cart <HiOutlineShoppingBag size={20} />
                  </button>
                  <button className="w-10 h-10 bg-[#F2F2F2] hover:bg-[#00B207] hover:text-white rounded-full flex items-center justify-center transition-colors">
                    <IoEyeOutline size={20} />
                  </button>
                </div>

                {/* Title & Info */}
                <div className="text-center mt-2">
                  <h3 className="font-pop font-medium text-[18px] text-[#2C742F] mb-1">
                    {featuredDeal.title || featuredDeal.name}
                  </h3>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-[18px] font-semibold text-[#1A1A1A]">
                      ${featuredDeal.price}
                    </span>

                    {featuredDeal.discountPercentage &&
                      featuredDeal.discountPercentage > 10 && (
                        <span className="text-[16px] text-[#999999] line-through">
                          $
                          {(
                            featuredDeal.price +
                            (featuredDeal.price *
                              featuredDeal.discountPercentage) /
                              100
                          ).toFixed(2)}
                        </span>
                      )}
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    {renderStars(featuredDeal.rating)}
                    <span className="text-sm text-[#808080] ml-1">
                      (524 Feedback)
                    </span>
                  </div>

                  {/* Countdown Timer */}
                  <div className="pt-3 mt-0.5">
                    <p className="text-sm text-[#808080] mb-2">
                      Hurry up! Offer ends in:
                    </p>
                    <CountdownTimer deadline={featuredDeal.deadline} />
                  </div>
                </div>
              </div>
            )}

            {/* SMALL HOT DEAL CARDS */}
            {otherDeals.map((pro) => {
              const isHovered = hoveredId === pro.id;
              return (
                <div
                  key={pro.id}
                  onMouseEnter={() => setHoveredId(pro.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`border border-[#E6E6E6] p-4 bg-white relative flex flex-col justify-between transition-all duration-300 ${
                    isHovered ? "border-primary z-10 shadow-lg" : ""
                  }`}
                >
                  {pro.discountPercentage && pro.discountPercentage > 10 && (
                    <span className="absolute top-3 left-3 bg-[#EA4B48] text-white text-[10px] font-medium px-2 py-0.5 rounded z-10">
                      Sale {Math.round(pro.discountPercentage)}%
                    </span>
                  )}

                  {/* Hover Buttons */}
                  <div
                    className={`absolute top-3 right-3 flex flex-col gap-2 transition-opacity duration-200 z-20 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <button className="w-8 h-8 bg-white border border-[#E6E6E6] rounded-full flex items-center justify-center hover:bg-[#00B207] hover:text-white transition-colors">
                      <CiHeart size={20} />
                    </button>
                    <button className="w-8 h-8 bg-white border border-[#E6E6E6] rounded-full flex items-center justify-center hover:bg-[#00B207] hover:text-white transition-colors">
                      <IoEyeOutline size={20} />
                    </button>
                  </div>

                  {/* Image */}
                  <div className="w-full h-[130px] my-2 flex items-center justify-center overflow-hidden">
                    <img
                      src={pro.thumbnail || pro.image}
                      alt={pro.title}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  {/* Title & Price */}
                  <div>
                    <h3
                      className={`font-pop text-[14px] mb-1 truncate ${
                        isHovered ? "text-[#2C742F]" : "text-[#4D4D4D]"
                      }`}
                    >
                      {pro.title || pro.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-1">
                          <span className="font-semibold text-[14px] text-[#1A1A1A]">
                            ${pro.price}
                          </span>

                          {pro.discountPercentage &&
                            pro.discountPercentage > 10 && (
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
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                          isHovered
                            ? "bg-[#00B207] text-white"
                            : "bg-[#F2F2F2] text-[#1A1A1A]"
                        }`}
                      >
                        <HiOutlineShoppingBag size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    );
  }

  /* =========================================================
      ৩. ফিচার্ড প্রোডাক্টস ভিউ (FEATURED PRODUCTS
  ========================================================= */
  if (type === "featured") {
    return (
      <div className="py-8">
        <Container>
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

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 border-t border-l border-[#E6E6E6]">
            {allData.map((pro) => {
              const isHovered = hoveredId === pro.id;
              return (
                <div
                  key={pro.id}
                  onMouseEnter={() => setHoveredId(pro.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`border border-[#E6E6E6] p-4 bg-white relative flex flex-col justify-between transition-all duration-200 ${
                    isHovered ? "border-primary z-10 shadow-md" : ""
                  }`}
                >
                  {/* Discount Badge */}
                  {pro.discountPercentage && pro.discountPercentage > 10 && (
                    <span className="absolute top-3 left-3 bg-[#EA4B48] text-white text-[10px] font-medium px-2 py-0.5 rounded z-10">
                      Sale {Math.round(pro.discountPercentage)}%
                    </span>
                  )}

                  {/* Quick Action Icons */}
                  <div
                    className={`absolute top-3 right-3 flex flex-col gap-2 transition-opacity duration-200 z-20 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <button className="w-8 h-8 bg-white border border-[#E6E6E6] rounded-full flex items-center justify-center hover:bg-[#00B207] hover:text-white transition-colors">
                      <CiHeart size={20} />
                    </button>
                    <button className="w-8 h-8 bg-white border border-[#E6E6E6] rounded-full flex items-center justify-center hover:bg-[#00B207] hover:text-white transition-colors">
                      <IoEyeOutline size={20} />
                    </button>
                  </div>

                  {/* Image */}
                  <div className="w-full h-[140px] my-3 flex items-center justify-center overflow-hidden">
                    <img
                      src={pro.thumbnail || pro.image}
                      alt={pro.title}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <h3
                      className={`font-pop text-[14px] mb-1 truncate ${
                        isHovered ? "text-[#2C742F]" : "text-[#4D4D4D]"
                      }`}
                    >
                      {pro.title || pro.name}
                    </h3>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-semibold text-[14px] text-[#1A1A1A]">
                            ${pro.price}
                          </span>
                          {/* ১০%-এর বেশি ডিসকাউন্ট থাকলে অরিজিনাল প্রাইস ডিসপ্লে করবে */}
                          {pro.discountPercentage &&
                            pro.discountPercentage > 10 && (
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
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                          isHovered
                            ? "bg-[#00B207] text-white"
                            : "bg-[#F2F2F2] text-[#1A1A1A]"
                        }`}
                      >
                        <HiOutlineShoppingBag size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    );
  }

  /* =========================================================
      ৪. পপুলার প্রোডাক্টস ভিউ (POPULAR PRODUCTS
  ========================================================= */
  return (
    <div className="py-8">
      <Container>
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

        {/* সংযুক্ত গ্রিড লেআউট */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 border-t border-l border-[#E6E6E6]">
          {allData.map((pro) => {
            const isHovered = hoveredId === pro.id;
            return (
              <div
                key={pro.id}
                onMouseEnter={() => setHoveredId(pro.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`border border-[#E6E6E6] p-4 bg-white relative flex flex-col justify-between transition-all duration-200 ${
                  isHovered ? "border-primary z-10 shadow-md" : ""
                }`}
              >
                {/* Discount Badge Conditional Check */}
                {pro.discountPercentage && pro.discountPercentage > 10 ? (
                  <span className="absolute top-3 left-3 bg-[#EA4B48] text-white text-[10px] font-medium px-2 py-0.5 rounded z-10">
                    Sale {Math.round(pro.discountPercentage)}%
                  </span>
                ) : null}

                {/* Quick Action Icons */}
                <div
                  className={`absolute top-3 right-3 flex flex-col gap-2 transition-opacity duration-200 z-20 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <button className="w-8 h-8 bg-white border border-[#E6E6E6] rounded-full flex items-center justify-center hover:bg-[#00B207] hover:text-white transition-colors">
                    <CiHeart size={20} />
                  </button>
                  <button className="w-8 h-8 bg-white border border-[#E6E6E6] rounded-full flex items-center justify-center hover:bg-[#00B207] hover:text-white transition-colors">
                    <IoEyeOutline size={20} />
                  </button>
                </div>

                {/* Product Image */}
                <div className="w-full h-[140px] my-3 flex items-center justify-center overflow-hidden">
                  <img
                    src={pro.thumbnail || pro.image}
                    alt={pro.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Content */}
                <div>
                  <h3
                    className={`font-pop text-[14px] mb-1 truncate ${
                      isHovered ? "text-[#2C742F]" : "text-[#4D4D4D]"
                    }`}
                  >
                    {pro.title || pro.name}
                  </h3>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-semibold text-[14px] text-[#1A1A1A]">
                          ${pro.price}
                        </span>

                        {pro.discountPercentage &&
                          pro.discountPercentage > 10 && (
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
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        isHovered
                          ? "bg-[#00B207] text-white"
                          : "bg-[#F2F2F2] text-[#1A1A1A]"
                      }`}
                    >
                      <HiOutlineShoppingBag size={20} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default ProductShowcase;
