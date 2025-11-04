import React, { useState } from "react";
import Image from "next/image";

export default function Header({setPage}) {
    const [search, setSearch] = useState(""); 
    const [sort, setSort] = useState("Relevance");

    
    return (<header className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
        <div className="flex gap-4">
        <button
          onClick={() => setPage("1")}
          className="text-2xl font-bold"
        >
          ACME STORE
        </button>

        <nav className="flex items-center gap-6 text-gray-400">
            <a href="#" onClick={() => setPage('all')} className="hover:text-white transition">All</a>
            <a href="#"  onClick={() => setPage('shirt')} className="hover:text-white transition">Shirts</a>
            <a href="#"  onClick={() => setPage('sticker')} className="hover:text-white transition">Stickers</a>
        </nav>
        </div>
        <input
                    type="text"
                    placeholder="Search for products..."
                    className="bg-neutral-900 text-gray-300 px-4 py-2 rounded-lg w-full sm:w-72 outline-none focus:ring-2 focus:ring-gray-700"
                    value={search}           
                    onChange={(e) => setSearch(e.target.value)}
                />

        <div className="border-gray-600 border rounded-md p-3 "> 
            <img className="size-4" src="/shop.png"></img>
        </div>
    </header>)
}