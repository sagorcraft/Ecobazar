import React from "react";
import Container from "./layouts/Container";
import BlogOne from "../assets/images/blogone.webp";
import BlogTwo from "../assets/images/blogtwo.webp";
import BlogThree from "../assets/images/blogthree.webp";
import { FaTag } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { BiMessageAlt } from "react-icons/bi";
import { Link } from "react-router";
import { IoIosArrowRoundForward } from "react-icons/io";

const blogPosts = [
  {
    id: 1,
    img: BlogOne,
    date: "18",
    month: "NOV",
    tag: "Food",
    author: "By Admin",
    comments: "65 Comments",
    title:
      "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
    active: true, // green title color on default/hover
  },
  {
    id: 2,
    img: BlogTwo,
    date: "29",
    month: "JAN",
    tag: "Food",
    author: "By Admin",
    comments: "65 Comments",
    title: "Eget lobortis lorem lacinia. Vivamus pharetra semper,",
    active: false,
  },
  {
    id: 3,
    img: BlogThree,
    date: "21",
    month: "FEB",
    tag: "Food",
    author: "By Admin",
    comments: "65 Comments",
    title: "Maecenas blandit risus elementum mauris malesuada.",
    active: false,
  },
];

const Blog = () => {
  return (
    <section className="py-15">
      <Container>
        <h2 className="text-center font-pop text-[32px] font-semibold text-[#1A1A1A] mb-8">
          Latest News
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1320px] mx-auto">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white border border-[#E6E6E6] rounded-lg overflow-hidden group shadow-sm hover:shadow-md transition-all"
            >
              {/* Image & Date Badge Container */}
              <div className="relative h-[324px] w-full overflow-hidden">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Date Badge */}
                <div className="absolute left-6 bottom-6 bg-white rounded-[4px] px-3.5 py-1.5 text-center shadow-md min-w-[58px]">
                  <span className="block text-[18px] font-bold text-[#1A1A1A] leading-tight">
                    {post.date}
                  </span>
                  <span className="block text-[12px] font-medium text-[#808080] uppercase tracking-wider">
                    {post.month}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="flex items-center gap-4 font-pop text-[14px] text-[#666666] mb-3">
                  <p className="flex items-center gap-1.5">
                    <FaTag className="text-[16px] text-[#808080]" />
                    {post.tag}
                  </p>
                  <p className="flex items-center gap-1.5">
                    <FaRegUser className="text-[16px] text-[#808080]" />
                    {post.author}
                  </p>
                  <p className="flex items-center gap-1.5">
                    <BiMessageAlt className="text-[16px] text-[#808080]" />
                    {post.comments}
                  </p>
                </div>

                <h3
                  className={`font-pop text-[18px] font-medium leading-snug mb-5 ${post.active ? "text-primary" : "text-[#1A1A1A]"} group-hover:text-primary transition-colors`}
                >
                  {post.title}
                </h3>

                <Link
                  to="#"
                  className="inline-flex items-center gap-2 text-[16px] font-semibold font-pop text-[#00B207] hover:text-primary transition-colors"
                >
                  Read More <IoIosArrowRoundForward className="text-[24px]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Blog;
