// Import necessary hooks from React
import { useState, useEffect } from 'react';

const Counter = () => {

  // ---- STATE INITIALIZATION ----
  // useState with a function to handle initial state
  // This is called lazy initialization
  const [count, setCount] = useState(() => {

    // Check if we're in browser environment (not server-side)
    // typeof window !== 'undefined': Returns true if the code is running in the browser.
    // typeof window === 'undefined': Returns true if the code is running on the server.


    if (typeof window !== 'undefined') {

      // Try to get existing count from localStorage
      const saved = localStorage.getItem('count');

      // If found, convert to number and use it, otherwise start at 0
      return saved ? Number(saved) : 0;
    }

    // Default to 0 if running on server
    return 0;
  });

  // State to track if counter is running
  const [isRunning, setIsRunning] = useState(false);

  // ---- PERSISTENCE EFFECT ----
  // This effect runs whenever count changes
  useEffect(() => {

    // Save current count to localStorage
    localStorage.setItem('count', count.toString());
  }, [count]); // Only re-run if count changes

  // ---- INTERVAL EFFECT ----
  // This effect handles the counting interval
  useEffect(() => {

    // Variable to store interval ID
    let intervalId : any;
    
    // Only set up interval if isRunning is true
    if (isRunning) {

      // Create interval that increments count every 1000ms (1 second)
      intervalId = setInterval(() => {
        
        // Use functional update to ensure we always have latest state
        setCount(c => c + 1);
      }, 1000);
    }

    // Cleanup function runs before effect re-runs and on unmount
    // This prevents memory leaks and ensures only one interval runs
    return () => clearInterval(intervalId);
  }, [isRunning]); // Only re-run if isRunning changes

  // ---- JSX / UI ----
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        {/* Display the current count */}
        <h1 className="text-4xl font-bold mb-4">{count}</h1>
        
        <div className="space-x-4">
          {/* Toggle button - switches between Start/Stop */}
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {isRunning ? 'Stop' : 'Start'}
          </button>

          {/* Reset button - sets count to 0 and stops the counter */}
          <button
            onClick={() => {
              setCount(0);
              setIsRunning(false);
            }}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;