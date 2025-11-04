"use client";

import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [sum, setSum] = useState(0);
  const [max, setMax] = useState(0);
  const [avg, setAvg] = useState(0);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);

  const sumOfTwo = (x, y) => x + y;
  const maxVal = (x, y, z) => Math.max(x, y, z);
  const avgOfThree = (x, y, z) => (x + y + z) / 3;

  const addName = () => {
    if (name.trim() !== "") {
      setNames([...names, name]);
      setName("");
    }
  };


  return (
    <div className="bg-white text-black min-h-screen p-6">
      <h1 className="text-2xl font-semibold mb-4">Calculator</h1>

      

      <hr className="my-4" />

      <div className="mb-6">
        <h2 className="text-lg font-medium mb-2">Calculate Sum, Max, and Average</h2>
        <div className="flex flex-col gap-2 mb-3">
          <input
            type="number"
            placeholder="A"
            value={a}
            onChange={(e) => setA(Number(e.target.value))}
            className="border p-2 rounded"
          />
          <input
            type="number"
            placeholder="B"
            value={b}
            onChange={(e) => setB(Number(e.target.value))}
            className="border p-2 rounded"
          />
          <input
            type="number"
            placeholder="C"
            value={c}
            onChange={(e) => setC(Number(e.target.value))}
            className="border p-2 rounded"
          />
        </div>

        <div className="flex gap-2 mb-3">
          <button
            onClick={() => setSum(sumOfTwo(a, b))}
            className="px-3 py-1 bg-blue-500 text-white rounded"
          >
            Sum
          </button>
          <button
            onClick={() => setMax(maxVal(a, b, c))}
            className="px-3 py-1 bg-green-500 text-white rounded"
          >
            Max
          </button>
          <button
            onClick={() => setAvg(avgOfThree(a, b, c))}
            className="px-3 py-1 bg-purple-500 text-white rounded"
          >
            Avg
          </button>
        </div>

        <p>
          Sum of A + B: <span className="font-semibold text-blue-600">{sum}</span>
        </p>
        <p>
          Max of A, B, C: <span className="font-semibold text-green-600">{max}</span>
        </p>
        <p>
          Average of A, B, C: <span className="font-semibold text-purple-600">{avg}</span>
        </p>
      </div>

      <hr className="my-4" />



      <div>
        <h2 className="text-lg font-medium mb-2">Add Name to List</h2>
        <div className="flex gap-2 mb-3">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded flex-1"
          />
          <button
            onClick={addName}
            className="px-3 py-1 bg-indigo-500 text-white rounded"
          >
            Add
          </button>
        </div>

        {names.length > 0 ? (
          <ul className="list-disc pl-5">
            {names.map((n, i) => (
              <li key={i}>
                <span className="font-medium text-gray-800">{n}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No names added yet.</p>
        )}
      </div>
    </div>
  );
}
