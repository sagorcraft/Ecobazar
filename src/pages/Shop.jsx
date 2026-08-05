import React, { useState } from "react";
import Container from "../components/layouts/Container";

// ---------- Icons (inline, no extra deps) ----------
const IconChevron = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M6 15l6-6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconFilter = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
    <circle cx="6" cy="7" r="2" stroke="white" strokeWidth="2" />
    <circle cx="14" cy="14" r="2" stroke="white" strokeWidth="2" />
    <path d="M6 4v1M6 9v11M14 4v8M14 16v4" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const IconHeart = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
    <path d="M12 20s-7-4.35-9.5-8.5C1 8 2.5 4.5 6 4.5c2 0 3.5 1.2 4 2.3.5-1.1 2-2.3 4-2.3 3.5 0 5 3.5 3.5 7C19 15.65 12 20 12 20z" stroke="#333" strokeWidth="1.6" />
  </svg>
);
const IconEye = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
    <path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12z" stroke="#333" strokeWidth="1.6" />
    <circle cx="12" cy="12" r="2.5" stroke="#333" strokeWidth="1.6" />
  </svg>
);
const IconBag = ({ light = false }) => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
    <path
      d="M6 8h12l-1 12H7L6 8z M9 8V6a3 3 0 016 0v2"
      stroke={light ? "white" : "#333"}
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);
const IconArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
    <path d="M4 12h16M14 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconStar = ({ filled = true }) => (
  <svg viewBox="0 0 20 20" fill={filled ? "#f5a623" : "none"} className="w-3.5 h-3.5">
    <path d="M10 1.5l2.6 5.4 5.9.7-4.3 4.1 1 5.9L10 14.7l-5.2 2.9 1-5.9L1.5 7.6l5.9-.7L10 1.5z" stroke="#f5a623" strokeWidth="1" />
  </svg>
);

const Stars = ({ count = 4 }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <IconStar key={i} filled={i < count} />
    ))}
  </div>
);

// ---------- Data ----------
const categories = [
  { name: "Fresh Fruit", sub: 25, count: 134 },
  { name: "Vegetables", count: 150, active: true },
  { name: "Cooking", count: 54 },
  { name: "Snacks", count: 47 },
  { name: "Beverages", count: 43 },
  { name: "Beauty & Health", count: 38 },
  { name: "Bread & Bakery", count: 15 },
];

const ratings = [
  { stars: 5, label: "5.0" },
  { stars: 4, label: "4.0 & up", active: true },
  { stars: 3, label: "3.0 & up" },
  { stars: 2, label: "2.0 & up" },
  { stars: 1, label: "1.0 & up" },
];

const tags = [
  "Healthy", "Low fat", "Vegetarian", "Kid foods", "Vitamins", "Bread",
  "Meat", "Snacks", "Tiffin", "Launch", "Dinner", "Breakfast", "Fruit",
];

const saleProducts = [
  { name: "Red Capsicum", price: 32, sale: 20.99, img: "https://placehold.co/80x80/f2f2f2/333?text=Capsicum" },
  { name: "Chanise Cabbage", price: 24, sale: 20.99, img: "https://placehold.co/80x80/f2f2f2/333?text=Cabbage", active: true },
  { name: "Green Capsicum", price: 32, sale: 20.99, img: "https://placehold.co/80x80/f2f2f2/333?text=Capsicum" },
];

const products = [
  { name: "Big Potatos", price: 14.99, img: "https://placehold.co/300x260/f2f2f2/333?text=Potatos" },
  { name: "Chanise Cabbage", price: 14.99, img: "https://placehold.co/300x260/f2f2f2/333?text=Cabbage", highlighted: true },
  { name: "Ladies Finger", price: 14.99, oldPrice: 20.99, img: "https://placehold.co/300x260/f2f2f2/333?text=Ladies+Finger", badge: "Out of Stock" },
  { name: "Eggplant", price: 14.99, img: "https://placehold.co/300x260/f2f2f2/333?text=Eggplant" },
  { name: "Fresh Cauliflower", price: 14.99, img: "https://placehold.co/300x260/f2f2f2/333?text=Cauliflower" },
  { name: "Green Apple", price: 14.99, img: "https://placehold.co/300x260/f2f2f2/333?text=Apple" },
  { name: "Green Capsicum", price: 14.99, img: "https://placehold.co/300x260/f2f2f2/333?text=Capsicum" },
  { name: "Green Chili", price: 14.99, img: "https://placehold.co/300x260/f2f2f2/333?text=Chili" },
  { name: "Green Cucumber", price: 14.99, oldPrice: 20.99, img: "https://placehold.co/300x260/f2f2f2/333?text=Cucumber", badge: "Sale 50%" },
  { name: "Green Littuce", price: 14.99, img: "https://placehold.co/300x260/f2f2f2/333?text=Lettuce" },
  { name: "Ladies Finger", price: 14.99, img: "https://placehold.co/300x260/f2f2f2/333?text=Ladies+Finger" },
  { name: "Green Capsicum", price: 14.99, img: "https://placehold.co/300x260/f2f2f2/333?text=Capsicum", highlighted: true },
  { name: "Red Chili", price: 14.99, img: "https://placehold.co/300x260/f2f2f2/333?text=Red+Chili" },
  { name: "Red Tomato", price: 14.99, img: "https://placehold.co/300x260/f2f2f2/333?text=Tomato" },
  { name: "Fresh Mango", price: 14.99, img: "https://placehold.co/300x260/f2f2f2/333?text=Mango" },
  { name: "Fresh Banana", price: 12.99, img: "https://placehold.co/300x260/f2f2f2/333?text=Banana" },
  { name: "Sweet Orange", price: 16.99, img: "https://placehold.co/300x260/f2f2f2/333?text=Orange" },
  { name: "Red Grapes", price: 18.99, oldPrice: 22.99, img: "https://placehold.co/300x260/f2f2f2/333?text=Grapes", badge: "Sale 50%" },
  { name: "Fresh Pineapple", price: 19.99, img: "https://placehold.co/300x260/f2f2f2/333?text=Pineapple" },
  { name: "Watermelon", price: 21.99, img: "https://placehold.co/300x260/f2f2f2/333?text=Watermelon" },
  { name: "Fresh Papaya", price: 13.99, img: "https://placehold.co/300x260/f2f2f2/333?text=Papaya" },
  { name: "Green Peas", price: 11.99, img: "https://placehold.co/300x260/f2f2f2/333?text=Peas" },
  { name: "Carrot", price: 9.99, img: "https://placehold.co/300x260/f2f2f2/333?text=Carrot" },
  { name: "Fresh Broccoli", price: 15.99, img: "https://placehold.co/300x260/f2f2f2/333?text=Broccoli", highlighted: true },
  { name: "Red Onion", price: 8.99, img: "https://placehold.co/300x260/f2f2f2/333?text=Onion" },
  { name: "Garlic", price: 7.99, img: "https://placehold.co/300x260/f2f2f2/333?text=Garlic" },
  { name: "Ginger", price: 6.99, img: "https://placehold.co/300x260/f2f2f2/333?text=Ginger" },
  { name: "Spinach", price: 10.99, img: "https://placehold.co/300x260/f2f2f2/333?text=Spinach" },
  { name: "Fresh Beetroot", price: 12.49, img: "https://placehold.co/300x260/f2f2f2/333?text=Beetroot" },
  { name: "Sweet Corn", price: 13.49, oldPrice: 17.99, img: "https://placehold.co/300x260/f2f2f2/333?text=Corn", badge: "Sale 50%" },
  { name: "Pumpkin", price: 14.49, img: "https://placehold.co/300x260/f2f2f2/333?text=Pumpkin" },
  { name: "Fresh Radish", price: 8.49, img: "https://placehold.co/300x260/f2f2f2/333?text=Radish" },
  { name: "Bitter Gourd", price: 11.49, img: "https://placehold.co/300x260/f2f2f2/333?text=Bitter+Gourd" },
  { name: "Bottle Gourd", price: 10.49, img: "https://placehold.co/300x260/f2f2f2/333?text=Bottle+Gourd" },
  { name: "Fresh Peach", price: 17.49, img: "https://placehold.co/300x260/f2f2f2/333?text=Peach" },
  { name: "Kiwi", price: 22.49, img: "https://placehold.co/300x260/f2f2f2/333?text=Kiwi", highlighted: true },
  { name: "Fresh Strawberry", price: 24.99, oldPrice: 29.99, img: "https://placehold.co/300x260/f2f2f2/333?text=Strawberry", badge: "Sale 50%" },
  { name: "Blueberry", price: 26.99, img: "https://placehold.co/300x260/f2f2f2/333?text=Blueberry" },
  { name: "Fresh Pear", price: 15.49, img: "https://placehold.co/300x260/f2f2f2/333?text=Pear" },
  { name: "Guava", price: 12.99, img: "https://placehold.co/300x260/f2f2f2/333?text=Guava" },
  { name: "Green Grapes", price: 18.49, img: "https://placehold.co/300x260/f2f2f2/333?text=Green+Grapes" },
  { name: "Dragon Fruit", price: 27.99, img: "https://placehold.co/300x260/f2f2f2/333?text=Dragon+Fruit" },
  { name: "Fresh Lemon", price: 5.99, img: "https://placehold.co/300x260/f2f2f2/333?text=Lemon" },
  { name: "Coconut", price: 9.49, img: "https://placehold.co/300x260/f2f2f2/333?text=Coconut" },
  { name: "Red Cabbage", price: 13.99, img: "https://placehold.co/300x260/f2f2f2/333?text=Red+Cabbage" },
  { name: "Zucchini", price: 12.29, img: "https://placehold.co/300x260/f2f2f2/333?text=Zucchini" },
  { name: "Sweet Potato", price: 10.29, img: "https://placehold.co/300x260/f2f2f2/333?text=Sweet+Potato" },
  { name: "Fresh Mushroom", price: 16.29, oldPrice: 19.99, img: "https://placehold.co/300x260/f2f2f2/333?text=Mushroom", badge: "Sale 50%" },
  { name: "Baby Corn", price: 11.29, img: "https://placehold.co/300x260/f2f2f2/333?text=Baby+Corn" },
  { name: "Green Beans", price: 9.79, img: "https://placehold.co/300x260/f2f2f2/333?text=Green+Beans" },
  { name: "Celery", price: 8.79, img: "https://placehold.co/300x260/f2f2f2/333?text=Celery" },
  { name: "Fresh Avocado", price: 20.79, img: "https://placehold.co/300x260/f2f2f2/333?text=Avocado" },
  { name: "Turnip", price: 7.29, img: "https://placehold.co/300x260/f2f2f2/333?text=Turnip", badge: "Out of Stock" },
];

// ---------- Small building blocks ----------
const SectionHeader = ({ title }) => (
  <div className="flex items-center justify-between mb-4">
    <h3 className="font-pop font-semibold text-[17px] text-gray-900">{title}</h3>
    <IconChevron className="w-4 h-4 text-gray-500" />
  </div>
);

const ProductCard = ({ p }) => (
  <div
    className={`relative bg-white border rounded-xl p-4 flex flex-col ${
      p.highlighted ? "border-primary" : "border-gray-200"
    }`}
  >
    {p.badge && (
      <span
        className={`absolute top-3 left-3 text-[11px] font-pop px-2 py-1 rounded-md text-white z-10 ${
          p.badge === "Out of Stock" ? "bg-black" : "bg-badgeone"
        }`}
      >
        {p.badge}
      </span>
    )}

    {p.highlighted && (
      <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
        <button className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center">
          <IconHeart />
        </button>
        <button className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center">
          <IconEye />
        </button>
      </div>
    )}

    <img src={p.img} alt={p.name} className="w-full h-[190px] object-contain mb-4" />

    <div className="flex items-center justify-between">
      <div>
        <p className={`font-pop text-[15px] mb-1 ${p.highlighted ? "text-primary" : "text-gray-900"}`}>
          {p.name}
        </p>
        <p className="font-pop font-semibold text-[15px] text-gray-900">
          ${p.price.toFixed(2)}
          {p.oldPrice && (
            <span className="ml-1.5 text-gray-400 line-through font-normal text-[13px]">
              ${p.oldPrice.toFixed(2)}
            </span>
          )}
        </p>
        <div className="mt-1.5">
          <Stars count={4} />
        </div>
      </div>

      <button
        className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center ${
          p.highlighted ? "bg-primary" : "bg-gray-100"
        }`}
      >
        <IconBag light={p.highlighted} />
      </button>
    </div>
  </div>
);

// ---------- Pagination ----------
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 mt-10">
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 disabled:opacity-40 disabled:cursor-not-allowed hover:border-primary hover:text-primary"
      >
        <IconChevron className="w-4 h-4 -rotate-90" />
      </button>

      {pages.map((n) => (
        <button
          key={n}
          onClick={() => onPageChange(n)}
          className={`w-9 h-9 rounded-full text-sm font-pop flex items-center justify-center transition-colors ${
            n === currentPage
              ? "bg-primary text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          {n}
        </button>
      ))}

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 disabled:opacity-40 disabled:cursor-not-allowed hover:border-primary hover:text-primary"
      >
        <IconChevron className="w-4 h-4 rotate-90" />
      </button>
    </div>
  );
};

const Shop = () => {
  const [price, setPrice] = useState([50, 1500]);



  // ---- Pagination state ----
  const itemsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="font-pop py-8">
      <Container>
        <div className="flex gap-8 items-start">
          {/* ---------- Sidebar ---------- */}
          <aside className="w-[280px] shrink-0">
            <button className="bg-primary text-white font-pop text-sm rounded-full px-5 py-2.5 flex items-center gap-2 mb-8">
              Filter <IconFilter />
            </button>

            <SectionHeader title="All Categories" />
            <div className="flex flex-col gap-3 pb-6 mb-6 border-b border-gray-200">
              {categories.map((c) => (
                <label key={c.name} className="flex items-center gap-3 cursor-pointer text-[14px] text-gray-700">
                  <span
                    className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      c.active ? "border-primary" : "border-gray-300"
                    }`}
                  >
                    {c.active && <span className="w-2.5 h-2.5 rounded-full bg-primary" />}
                  </span>
                  <span className={c.active ? "text-gray-900" : ""}>
                    {c.name} {c.sub && `(${c.sub})`} ({c.count})
                  </span>
                </label>
              ))}
            </div>

            <SectionHeader title="Price" />
            <div className="pb-6 mb-6 border-b border-gray-200">
              <input
                type="range"
                min={50}
                max={1500}
                value={price[1]}
                onChange={(e) => setPrice([price[0], Number(e.target.value)])}
                className="w-full accent-primary"
              />
              <p className="text-[13px] text-gray-600 mt-2">
                Price: {price[0]} — {price[1].toLocaleString()}
              </p>
            </div>

            <SectionHeader title="Rating" />
            <div className="flex flex-col gap-3 pb-6 mb-6 border-b border-gray-200">
              {ratings.map((r) => (
                <label key={r.label} className="flex items-center gap-3 cursor-pointer text-[14px] text-gray-700">
                  <span
                    className={`w-4 h-4 rounded flex items-center justify-center border ${
                      r.active ? "bg-primary border-primary" : "border-gray-300"
                    }`}
                  >
                    {r.active && (
                      <svg viewBox="0 0 12 12" className="w-2.5 h-2.5">
                        <path d="M2 6l3 3 5-6" stroke="white" strokeWidth="1.6" fill="none" />
                      </svg>
                    )}
                  </span>
                  <Stars count={r.stars} />
                  <span>{r.label}</span>
                </label>
              ))}
            </div>

            <SectionHeader title="Popular Tag" />
            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map((t) => (
                <button
                  key={t}
                  className={`text-[13px] px-3.5 py-1.5 rounded-full border ${
                    t === "Low fat"
                      ? "bg-primary text-white border-primary"
                      : "border-gray-300 text-gray-700"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="bg-gry rounded-xl p-5 mb-8 relative overflow-hidden">
              <p className="text-orange-500 font-bold text-xl">
                79% <span className="text-gray-900 font-semibold text-base">Discount</span>
              </p>
              <p className="text-gray-500 text-sm mb-3">on your first order</p>
              <a href="#" className="text-primary text-sm font-semibold flex items-center gap-1">
                Shop Now <IconArrowRight />
              </a>
              <img
                src="https://placehold.co/280x120/f2f2f2/333?text=Veggies"
                alt="Discount"
                className="w-full mt-3 rounded-lg"
              />
            </div>

            <h3 className="font-pop font-semibold text-[17px] text-gray-900 mb-4">Sale Products</h3>
            <div className="flex flex-col gap-3">
              {saleProducts.map((s, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 border rounded-lg p-2.5 ${
                    s.active ? "border-primary" : "border-gray-200"
                  }`}
                >
                  <img src={s.img} alt={s.name} className="w-14 h-14 object-contain" />
                  <div>
                    <p className={`text-[14px] mb-0.5 ${s.active ? "text-primary" : "text-gray-900"}`}>
                      {s.name}
                    </p>
                    <p className="text-[14px] font-semibold text-gray-900">
                      ${s.price.toFixed(2)}{" "}
                      <span className="text-gray-400 line-through font-normal text-[12px]">
                        ${s.sale.toFixed(2)}
                      </span>
                    </p>
                    <Stars count={4} />
                  </div>
                </div>
              ))}
            </div>
          </aside>

          {/* ---------- Main content ---------- */}
          <div className="flex-1">
            {/* Top bar: sort + barcode search + results count */}
            <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                Sort by:
                <select className="border border-gray-300 rounded-lg px-3 py-1.5 text-gray-800">
                  <option>Latest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>

              

              <p className="text-sm font-semibold text-gray-900">
                {products.length} <span className="font-normal text-gray-600">Results Found</span>
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {paginatedProducts.map((p, i) => (
                <ProductCard key={i} p={p} />
              ))}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Shop;