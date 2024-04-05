"use client";
import { useState } from "react";

export default function Button() {
  const [count, setCount] = useState<number>(0);

  const countClick = () => {
    setCount((e) => e + 1);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={countClick}
        className="p-2 bg-gray-200 shadow-sm rounded-md border-2"
      >
        Click me Client Server
      </button>
      <div>{count}</div>
    </div>
  );
}
