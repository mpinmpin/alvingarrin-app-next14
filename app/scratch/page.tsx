// page.tsx
'use client'


import { useState, useEffect, useRef } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <main>
      <input
        className="rounded-sm border border-gray-500 pl-1"
        placeholder="input anything here"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1 className="pl-1 ">Render Count: {count.current}</h1>
    </main>
  );
}