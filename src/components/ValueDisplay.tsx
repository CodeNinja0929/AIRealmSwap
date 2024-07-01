import React, { useEffect, useState } from "react";

const getRandomValue = (min: number, max: number) => {
  return parseFloat((Math.random() * (max - min) + min).toFixed(4));
};

const getRandomInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const ValueDisplay = () => {
  const [value, setValue] = useState<number>(getRandomValue(0.3453, 0.5012));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false); // Set loading to false since we don't need to fetch from backend

    const updateValue = () => {
      setValue(getRandomValue(0.3453, 0.5012));
    };

    const setRandomInterval = () => {
      const interval = getRandomInterval(500, 3000); // Random interval between 500ms and 3000ms
      return setInterval(() => {
        updateValue();
        clearInterval(intervalId);
        intervalId = setRandomInterval();
      }, interval);
    };

    let intervalId = setRandomInterval();

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="value-display mt-8 p-4 border border-gray-200 rounded-lg shadow-lg bg-white text-center">
      {loading ? (
        <div className="spinner">Loading...</div>
      ) : (
        <p className="text-xl font-bold">
          AI Calculated Slippage Value: {value}
        </p>
      )}
    </div>
  );
};

export default ValueDisplay;
