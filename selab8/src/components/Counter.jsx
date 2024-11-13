import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const HandleClick = () => {
    setCount(count + 1);
  };
  const HandleDecrease = ()=>{
    setCount(count - 1);
  }
  const handleReset = ()=>{
    setCount(0);
  }
  return (
    <div className="flex items-center justify-center h-screen bg-slate-500">
      <div className=" flex flex-col items-end justify-center">
        <h1 className="text-white text-2xl font-semibold ">Counter</h1>
        <h2 className="text-white text-3xl">{count}</h2>
        <div className="flex flex-row gap-4">
            <button className="text-white py-2 px-7 outline-none rounded-lg bg-green-500" onClick={HandleClick}>+</button>
            <button onClick={HandleDecrease} className="text-white py-2 px-7 outline-none rounded-lg bg-red-300">-</button>
        </div>
        <button onClick={handleReset} className="text-white bg-yellow-800 py-2 px-7 rounded-lg mt-3">Reset</button>
      </div>
    </div>
  );
}
