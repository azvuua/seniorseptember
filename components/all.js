"use client";

import React, { useState } from "react";
import Image from "next/image";
import ProductDetail from "./productdetail"; 

const products = [
  { id: 1, name: "Acme Circles T-Shirt", price: "$20.00 USD", image: "/tshirt.png", category: "shirt" },
  { id: 2, name: "Acme Drawstring Bag", price: "$12.00 USD", image: "/bag.png", category: "bag" },
  { id: 3, name: "Acme Cup", price: "$15.00 USD", image: "/cup.png", category: "drinkware" },
  { id: 4, name: "Acme Sticker 1", price: "$5.00 USD", image: "/cup1.png", category: "cup" },
  { id: 5, name: "Acme Sticker 2", price: "$5.00 USD", image: "/sweater.png", category: "shirt" },
  { id: 6, name: "Acme Sticker 3", price: "$5.00 USD", image: "/tshirt.png", category: "sticker" },
];

export default function All({ initialCategory = "all" }) {
  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState("Relevance");
  const [selectedProduct, setSelectedProduct] = useState(null); 

  const filteredProducts = products.filter(
    (product) => category === "all" || product.category === category
  );

  const sortedProducts = [...filteredProducts];

  const categories = [
    { key: "all", label: "All" },
    { key: "bag", label: "Bags" },
    { key: "drinkware", label: "Drinkware" },
    { key: "shirt", label: "Shirts" },
    { key: "sticker", label: "Stickers" },
  ];

  const sortOptions = [
    { key: "Relevance", label: "Relevance" },
    { key: "trending", label: "Trending" },
    { key: "latestArrival", label: "Latest Arrivals" },
    { key: "LtH", label: "Price: Low to High" },
    { key: "HtL", label: "Price: High to Low" },
  ];

  if (selectedProduct) {
    return (
      <ProductDetail
        product={selectedProduct}
        onBack={() => setSelectedProduct(null)} 
      />
    );
  }

  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-12 w-full">
      <div className="w-full md:w-auto flex flex-row md:flex-col justify-start items-center md:items-start md:gap-3">
        <div className="w-full">
          <p className="text-gray-500 text-xs mb-2 md:mb-3">Collections</p>
          <nav className="flex flex-row md:flex-col gap-2 md:gap-2 overflow-x-auto md:overflow-visible">
            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => setCategory(c.key)}
                className={`text-sm px-4 py-2 flex rounded-md whitespace-nowrap transition font-normal items-start
                  ${category === c.key ? "text-white font-semibold" : "text-gray-200 hover:text-white"}`}
              >
                {c.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="hidden md:grid grid-cols-3 gap-6">
          {sortedProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="cursor-pointer relative bg-neutral-950 rounded-2xl overflow-hidden border border-neutral-800 hover:border-gray-600 transition w-full aspect-square"
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover opacity-90"
              />
              <div className="absolute bottom-3 left-3 bg-black/70 px-3 py-1.5 rounded-lg flex flex-col gap-1">
                <span className="text-xs text-gray-200">{product.name}</span>
                <span className="text-xs font-semibold text-white bg-blue-600 px-2 py-0.5 rounded-md">
                  {product.price}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="md:hidden relative w-full overflow-hidden">
          <div className="flex animate-marquee space-x-4 w-max">
            {[...sortedProducts, ...sortedProducts].map((product, index) => (
              <div
                key={index}
                onClick={() => setSelectedProduct(product)} 
                className="cursor-pointer relative bg-neutral-950 rounded-2xl overflow-hidden border border-neutral-800 hover:border-gray-600 transition w-48 h-48 flex-shrink-0"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover opacity-90"
                />
                <div className="absolute bottom-3 left-3 bg-black/70 px-3 py-1.5 rounded-lg flex flex-col gap-1">
                  <span className="text-xs text-gray-200">{product.name}</span>
                  <span className="text-xs font-semibold text-white bg-blue-600 px-2 py-0.5 rounded-md">
                    {product.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden md:flex flex-col items-start gap-1 text-gray-200">
        {sortOptions.map((s) => (
          <button
            key={s.key}
            onClick={() => setSort(s.key)}
            className="text-sm px-4 py-2 rounded-md text-left transition text-gray-200 hover:text-white"
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="flex md:hidden justify-center mt-4">
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="bg-neutral-900 text-gray-200 border border-neutral-700 rounded-lg px-4 py-2 text-sm"
        >
          {sortOptions.map((s) => (
            <option key={s.key} value={s.key}>
              {s.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
