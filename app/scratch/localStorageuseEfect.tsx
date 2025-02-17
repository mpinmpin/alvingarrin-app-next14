'use client'

import { useState, useEffect } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  // Load the count from localStorage only on the client side
  useEffect(() => {
    const savedCount = localStorage.getItem('count');
    if (savedCount) {
      setCount(parseInt(savedCount, 10));
    }
  }, []);

  // Update the count every second and save it to localStorage
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        const newCount = prevCount + 1;
        localStorage.setItem('count', newCount.toString());
        return newCount;
      });
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          setCount(0);
          localStorage.setItem('count', '0');
        }}
        style={{ padding: '10px 20px', fontSize: '16px' }}
      >
        Reset Counter
      </button>
    </div>
  );
}