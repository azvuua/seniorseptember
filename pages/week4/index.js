import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';


export default function Shop() {
  const router = useRouter();
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("iishe orjin");
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((response) => response.json())
      .then((json) => { setData(json); console.log(json) })
      .catch((error) => console.error('Error fetching API:', error));
  }, []);

  return (
    <div className="bg-gray-50 p-10">
      <header className="flex justify-between items-center mb-12 container mx-auto max-w-7xl">
        <h1 className="text-3xl font-extrabold text-purple-700 tracking-tight">Style & Tech Store</h1>
        <p className="text-gray-500 text-sm md:text-base">Quality products. Affordable prices.</p>
      </header>

      <section className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-gray-800 mb-3">Featured Products</h2>
        <p className="text-gray-600 mb-10">
          Discover our curated collection of fashion essentials and modern gadgets designed to fit your lifestyle.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((product, i) => i < 18 && (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition transform flex flex-col"
            >
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900">{product.title}</h3>
                <p className="text-gray-600 text-sm mt-2 line-clamp-2">{product.description}</p>
                <p className="text-green-700 font-semibold mt-3">${product.price}</p>

                <button
                  onClick={() => router.push("week4/"+product.slug)}
                  className="mt-auto w-full bg-purple-600 text-white py-3 px-4 rounded-4xl font-medium hover:bg-purple-700 transition"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}



