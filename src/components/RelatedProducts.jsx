import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductShowcase from "./ProductShowcase";

export default function RelatedProducts({
  title = "Related Products",
  limit = 4,
}) {
  const [proData, setProData] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await axios.get("https://dummyjson.com/products");
        setProData(res.data.products.slice(0, limit));
      } catch (error) {
        console.error("Error fetching related products:", error);
      }
    }
    fetchProducts();
  }, [limit]);

  return (
    <ProductShowcase
      title={title}
      type="related"
      allData={proData}
    />
  );
}