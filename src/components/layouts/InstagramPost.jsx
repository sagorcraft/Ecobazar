import React, { useState } from "react";
import InstaOne from "../../assets/images/instagram.webp";
import InstaTwo from "../../assets/images/instaone.webp";
import InstaThree from "../../assets/images/instatwo.webp";
import InstaFour from "../../assets/images/instathree.webp";
import InstaFive from "../../assets/images/instafour.webp";
import InstaSix from "../../assets/images/instafive.webp";
import { IoLogoInstagram } from "react-icons/io5";

const instaPosts = [
  { id: 1, img: InstaOne },
  { id: 2, img: InstaTwo },
  { id: 3, img: InstaThree },
  { id: 4, img: InstaFour },
  { id: 5, img: InstaFive },
  { id: 6, img: InstaSix },
];

const InstagramPost = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Follow Us On Instagram</h2>

        {/* Instagram Post Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instaPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedImg(post.img)}
              className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-square"
            >
              {/* Main Image */}
              <img
                src={post.img}
                alt={`Instagram post ${post.id}`}
                className="w-full h-full object-cover"
              />

              {/* Hover Overlay with Greenish Tint and Instagram Icon */}
              <div className="absolute inset-0 bg-[#004B18]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <IoLogoInstagram size={32} className="text-white stroke-[2]"/>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div
          onClick={() => setSelectedImg(null)}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full bg-white rounded-xl overflow-hidden shadow-2xl flex flex-col items-center p-4"
          >
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition"
            >
              <IoLogoInstagram size={20} />
            </button>

            <img
              src={selectedImg}
              alt="Selected Instagram Post"
              className="w-full max-h-[70vh] object-contain rounded-lg mb-4 mt-6"
            />

            <button
              onClick={() => setSelectedImg(null)}
              className="text-white bg-black hover:bg-gray-800 py-2 px-6 rounded-lg font-medium transition cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default InstagramPost;