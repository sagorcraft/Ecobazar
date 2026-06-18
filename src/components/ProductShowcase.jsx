import React, { useState } from "react";
import Container from "./layouts/Container";
import { HiArrowSmallRight } from "react-icons/hi2";
import { Link } from "react-router";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaHeart, FaEye, FaShoppingBag } from "react-icons/fa";
import CountdownTimer from "./CountdownTimer.jsx";

const ProductShowcase = ({ title, allData, viewAllLink, type }) => {
  const [hoveredId, setHoveredId] = useState(null);

  function renderStars(rating) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-[#FF8A00]" />);
      } else if (i - 0.5 <= rating) {
        stars.push(<FaStarHalfAlt key={i} className="text-[#FF8A00]" />);
      } else {
        stars.push(<FaStar key={i} className="text-[#CCCCCC]" />);
      }
    }
    return stars;
  }

  function getTransformOrigin(index, total) {
    const col = index % 5;
    const isLastRow = index >= total - 5;
    const vertical = isLastRow ? "bottom" : "top";
    if (col === 4) return `right ${vertical}`;
    if (col === 3) return `right ${vertical}`;
    return `left ${vertical}`;
  }

  return (
    <div>
      <Container>
        <div className="flex items-center justify-between pt-15 pb-8">
          <h2 className="font-pop font-semibold text-[32px] text-[#1A1A1A]">
            {title}
          </h2>

          <Link
            to={viewAllLink}
            className="flex items-center gap-2 font-pop font-medium text-[16px] text-[#00B207]"
          >
            View all <HiArrowSmallRight className="text-[24px]" />
          </Link>
        </div>

        <div
          className={`${
            type === "category"
              ? "grid grid-cols-6 gap-6"
              : "grid grid-cols-5 gap-4"
          }`}
        >
          {allData.map((pro, index) => {
            const isHovered = hoveredId === pro.id;

            return (
              <div
                key={pro.id}
                onMouseEnter={() => setHoveredId(pro.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group border rounded-lg p-4 cursor-pointer relative bg-white transition-all duration-300"
                style={{
                  minHeight: "220px",

                  borderColor:
                    type !== "hotdeal" && isHovered
                      ? "#2C742F"
                      : "transparent",

                  transform:
                    type === "hotdeal" && isHovered
                      ? "scale(2)"
                      : "translateY(0)",

                  transformOrigin: getTransformOrigin(
                    index,
                    allData.length
                  ),

                  zIndex: isHovered ? 30 : 1,

                  boxShadow:
                    type === "hotdeal" && isHovered
                      ? "0 8px 30px rgba(0,0,0,0.15)"
                      : "none",

                  transition:
                    "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                }}
              >
                {/* IMAGE */}
                <div className="relative">
                  <img
                    src={pro.thumbnail || pro.image}
                    alt={pro.title}
                    className="w-full object-contain rounded-lg mb-3"
                    style={{ height: "130px" }}
                  />

                  {type === "hotdeal" && (
                    <div>
                      <div
                        className="absolute top-2 right-2 flex flex-col gap-2"
                        style={{ opacity: isHovered ? 1 : 0 }}
                      >
                        <button className="w-7 h-7 bg-white rounded-full shadow flex items-center justify-center hover:bg-[#2C742F] hover:text-white">
                          <FaHeart size={11} />
                        </button>

                        <button className="w-7 h-7 bg-white rounded-full shadow flex items-center justify-center hover:bg-[#2C742F] hover:text-white">
                          <FaEye size={11} />
                        </button>
                      </div>

                      <div
                        className="absolute bottom-1 left-0 w-full px-1"
                        style={{ opacity: isHovered ? 1 : 0 }}
                      >
                        <button className="w-full bg-[#00B207] text-white py-1.5 rounded-full text-[10px] font-medium">
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* TITLE */}
                <h3
                  className="font-pop font-semibold mb-1 truncate"
                  style={{
                    fontSize: "13px",
                    textAlign: pro.name ? "center" : "left",

                    color:
                      type !== "hotdeal" && isHovered
                        ? "#2C742F"
                        : "#1A1A1A",
                  }}
                >
                  {pro.name || pro.title}
                </h3>

                {/* PRICE + RATING */}
                <div className="flex items-center justify-between">
                  <div>
                    {pro.price && (
                      <p
                        className="font-pop font-medium"
                        style={{ fontSize: "13px" }}
                      >
                        ${pro.price}
                      </p>
                    )}

                    {pro.rating && (
                      <div className="flex items-center gap-0.5">
                        {renderStars(pro.rating)}
                      </div>
                    )}
                  </div>

                  {pro.price && (
                    <button
                      className="rounded-full flex items-center justify-center transition-all duration-300"
                      style={{
                        width: "30px",
                        height: "30px",

                        background:
                          type !== "hotdeal" && isHovered
                            ? "#00B207"
                            : "#f3f4f6",

                        color:
                          type !== "hotdeal" && isHovered
                            ? "#fff"
                            : "#555",
                      }}
                    >
                      <FaShoppingBag size={12} />
                    </button>
                  )}
                </div>

                {/* COUNTDOWN */}
                {type === "hotdeal" && (
                  <div style={{ opacity: isHovered ? 1 : 0 }}>
                    <CountdownTimer deadline={pro.deadline} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default ProductShowcase;