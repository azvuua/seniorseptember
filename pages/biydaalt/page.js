"use client";

import All from "@/components/all";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import ProductDetail from "@/components/productdetail"; 

const products = [
  { id: 1, name: "Acme Circles T-Shirt", price: "$20.00 USD", image: "/tshirt.png", category: "shirt" },
  { id: 2, name: "Acme Drawstring Bag", price: "$12.00 USD", image: "/bag.png", category: "bag" },
  { id: 3, name: "Acme Cup", price: "$15.00 USD", image: "/cup.png", category: "cup" },
  { id: 4, name: "Acme HH 1", price: "$5.00 USD", image: "/huuhed.png", category: "sticker" },
  { id: 5, name: "Acme Sweater", price: "$10.00 USD", image: "/sweater.png", category: "sticker" },
  { id: 6, name: "Acme Cup", price: "$5.00 USD", image: "/cup1.png", category: "sticker" },
  { id: 7, name: "Acme Cup", price: "$5.00 USD", image: "/cup.png", category: "sticker" },
  { id: 8, name: "Acme TShirt", price: "$5.00 USD", image: "/tshirt.png", category: "sticker" },
];

export default function HomePage() {
  const [page, setPage] = useState("1");
  const [selectedProduct, setSelectedProduct] = useState(null); 

  if (selectedProduct) {
    return (
      <ProductDetail
        product={selectedProduct}
        onBack={() => setSelectedProduct(null)}
      />
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-6 flex justify-center">
      <div className="w-full max-w-7xl">
        <Header setPage={setPage} />
        {page == "1" ? (
          <>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 md:h-[500px] mb-8">
              <div
                className="relative md:col-span-2 bg-neutral-950 rounded-2xl overflow-hidden border border-neutral-800 hover:border-gray-600 transition h-[250px] md:h-auto cursor-pointer"
                onClick={() => setSelectedProduct(products[0])} 
              >
                <Image
                  src={products[0].image}
                  alt={products[0].name}
                  fill
                  className="object-cover opacity-90"
                />
                <div className="absolute bottom-4 left-4 bg-black/70 px-4 py-2 rounded-lg flex items-center gap-3">
                  <span className="text-sm text-gray-200">{products[0].name}</span>
                  <span className="text-sm font-semibold text-white bg-blue-600 px-2 py-1 rounded-md">
                    {products[0].price}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-6 md:h-auto">
                {products.slice(1, 3).map((product) => (
                  <div
                    key={product.id}
                    onClick={() => setSelectedProduct(product)} 
                    className="relative bg-neutral-950 rounded-2xl overflow-hidden border border-neutral-800 hover:border-gray-600 transition h-[250px] md:flex-1 cursor-pointer"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover opacity-90"
                    />
                    <div className="absolute bottom-3 left-3 bg-black/70 px-3 py-1.5 rounded-lg flex items-center gap-2">
                      <span className="text-xs text-gray-200">{product.name}</span>
                      <span className="text-xs font-semibold text-white bg-blue-600 px-2 py-0.5 rounded-md">
                        {product.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="overflow-x-auto no-scrollbar">
              <Marquee speed={20}>
                {products.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => setSelectedProduct(product)} 
                    className="relative mr-4 bg-neutral-950 rounded-2xl overflow-hidden border border-neutral-800 hover:border-gray-600 transition w-48 h-48 flex-shrink-0 cursor-pointer"
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
              </Marquee>
            </section>
          </>
        ) : page == "all" ? (
          <All category="all" />
        ) : page == "sticker" ? (
          <All category="sticker" />
        ) : (
          <All category="shirt" />
        )}
        <Footer />
      </div>
    </main>
  );
}
