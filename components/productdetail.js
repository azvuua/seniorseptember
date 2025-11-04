"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductDetail({ product, onBack }) {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const colors = ["Black", "White", "Blue"];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];

  const isReadyToAdd = selectedColor && selectedSize;

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-12 min-h-screen bg-black text-white px-6 py-10">
      <div className="flex flex-col items-center">
        <div className="relative w-80 h-80">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain rounded-xl"
          />
        </div>

        <button
          onClick={onBack}
          className="mt-6 text-gray-400 hover:text-white text-sm underline"
        >
          ← Back to products
        </button>
      </div>

      <div className="max-w-sm">
        <h1 className="text-3xl font-semibold mb-3">{product.name}</h1>
        <p className="text-blue-400 font-medium text-lg mb-4">{product.price}</p>

        <div className="mb-6">
          <h2 className="text-sm text-gray-400 mb-2">COLOR</h2>
          <div className="flex gap-3">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`px-4 py-1 rounded-full border transition ${
                  selectedColor === color
                    ? "bg-gray-100 text-black border-gray-300"
                    : "bg-gray-800 text-gray-300 border-gray-700 hover:border-gray-500"
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-sm text-gray-400 mb-2">SIZE</h2>
          <div className="flex flex-wrap gap-3">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-1 rounded-full border transition ${
                  selectedSize === size
                    ? "bg-gray-100 text-black border-gray-300"
                    : "bg-gray-800 text-gray-300 border-gray-700 hover:border-gray-500"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <p className="text-sm text-gray-400 mb-6">
          60% combed ringspun cotton / 40% polyester jersey tee.
        </p>

        <button
          disabled={!isReadyToAdd}
          className={`w-full px-6 py-3 rounded-full text-lg font-semibold transition 
            ${
              isReadyToAdd
                ? "bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
                : "bg-gray-700 text-gray-400 cursor-not-allowed"
            }`}
        >
          + Add To Cart
        </button>
      </div>
    </div>
  );
}
