import React from 'react';
import { useRouter } from 'next/router';

export default function NewPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <button
        className="mb-6 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
        onClick={() => router.push('/')}
      >
        Back to Portfolio
      </button>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Personal Website</h1>
      <p className="text-gray-600">This is a responsive personal website built with Next.js and TailwindCSS.</p>
    </div>
  );
}
