import React, { useEffect, useState } from 'react';

export default function Shop() {
  const [data, setData] = useState([]); // Just a placeholder if you plan to fetch products later

  useEffect(() => {
    console.log("Component mounted!");
  }, []);

  console.log(data);

  return (
    <div className="bg-gray-50 p-10 min-h-screen">
      <header className="flex justify-between items-center mb-12 container mx-auto max-w-7xl">
        <h1 className="text-3xl font-extrabold text-purple-700 tracking-tight">
          Style & Tech Store
        </h1>
        <p className="text-gray-500 text-sm md:text-base">
          Quality products. Affordable prices.
        </p>
      </header>

      <section className="container mx-auto max-w-7xl mb-12">
        <div className="flex gap-20 items-start">
          <div className="w-[300px] h-[300px] flex-col rounded-2xl bg-[#AD9EDC]/10 flex items-center justify-center shadow-xs">
            <p className="text-2xl text-[#886FD5]/70">+</p>
            <p className="text-lg font-semibold text-black/50">Display Photo</p>
          </div>

          <div className="flex flex-col gap-4 justify-between h-[300px] items-center">
            <p className="text-black/50 font-semibold">
              Additional photos of the product
            </p>
            <div className="flex gap-6">
              {Array.from({ length: 4 }).map((_, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2">
                  <p className="font-bold text-black/70">{idx + 1}</p>
                  <div className="w-[180px] h-[180px] rounded-xl bg-[#AD9EDC]/10 flex items-center justify-center shadow-xs">
                    <p className="text-2xl text-[#886FD5]/70">+</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto mt-24 max-w-7xl">
        <div className="flex gap-20">
          <div className="flex flex-col gap-3 flex-1">
            <label className="font-bold text-[#886FD5]">Product Name</label>
            <input
              type="text"
              className="p-4 rounded-lg border border-[#886FD5] bg-[#AD9EDC]/10 focus:outline-none focus:ring-2 focus:ring-[#886FD5]"
            />

            <label className="font-bold text-[#886FD5]">Category</label>
            <input
              type="text"
              className="p-4 rounded-lg border border-[#886FD5] bg-[#AD9EDC]/10 focus:outline-none focus:ring-2 focus:ring-[#886FD5]"
            />

            <label className="font-bold text-[#886FD5]">Price</label>
            <input
              type="number"
              className="p-4 rounded-lg border border-[#886FD5] bg-[#AD9EDC]/10 focus:outline-none focus:ring-2 focus:ring-[#886FD5]"
            />

            <label className="font-bold text-[#886FD5]">Brand</label>
            <input
              type="text"
              className="p-4 rounded-lg border border-[#886FD5] bg-[#AD9EDC]/10 focus:outline-none focus:ring-2 focus:ring-[#886FD5]"
            />
          </div>

          <div className="flex flex-col gap-3 flex-1">
            <label className="font-bold text-[#886FD5]">Color</label>
            <input
              type="text"
              className="p-4 rounded-lg border border-[#886FD5] bg-[#AD9EDC]/10 focus:outline-none focus:ring-2 focus:ring-[#886FD5]"
            />

            <label className="font-bold text-[#886FD5]">Size</label>
            <input
              type="text"
              className="p-4 rounded-lg border border-[#886FD5] bg-[#AD9EDC]/10 focus:outline-none focus:ring-2 focus:ring-[#886FD5]"
            />

            <label className="font-bold text-[#886FD5]">Material</label>
            <input
              type="text"
              className="p-4 rounded-lg border border-[#886FD5] bg-[#AD9EDC]/10 focus:outline-none focus:ring-2 focus:ring-[#886FD5]"
            />

            <label className="font-bold text-[#886FD5]">Stock Quantity</label>
            <input
              type="text"
              className="p-4 rounded-lg border border-[#886FD5] bg-[#AD9EDC]/10 focus:outline-none focus:ring-2 focus:ring-[#886FD5]"
            />
          </div>

          <div className="flex flex-col justify-end flex-1">
            <button className="w-full bg-[#886FD5] text-white font-semibold py-4 rounded-xl hover:bg-[#7B5FCC] transition">
              Add Product
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
