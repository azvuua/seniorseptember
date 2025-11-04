// pages/blog/[slug].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    fetch('https://api.escuelajs.co/api/v1/products')
      .then((res) => res.json())
      .then((json) => {
        const found = json.find((p) => p.slug === slug);
        setProduct(found);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching API:', err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <div className="text-center mt-20">Loading...</div>;
  if (!product) return <div className="text-center mt-20 text-red-500">Product not found</div>;

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col p-5'>
      <button
        onClick={() => router.push("/week4")}
        className=" bg-purple-600 text-white py-3 px-4 w-fit rounded-4xl font-medium hover:bg-purple-700 transition"
      >
        Back
      </button>
      <div className="py-12 grow px-4 justify-center items-center flex-col flex">

        <div className="max-w-6xl bg-white rounded-xl shadow-xl overflow-hidden md:flex">

          <div className="md:w-1/2 p-6 bg-gray-50 flex space-x-4 overflow-x-auto">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product Image ${index + 1}`}
                className="flex-shrink-0 h-full object-cover rounded-lg shadow-sm"
              />
            ))}
          </div>

          <div className="md:w-1/2 p-8 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
              <p className="text-gray-600 mt-4 leading-relaxed text-base">
                {product.description}
              </p>
            </div>

            <div className="mt-8">
              <p className="text-2xl font-semibold text-green-700">${product.price}</p>
              <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
