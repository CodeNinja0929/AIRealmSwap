import React, { useEffect, useState } from "react";
import axios from "axios";

const ValueDisplay = () => {
  const [value, setValue] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchValue = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/api/value"); // Flask back-end endpoint
        setValue(response.data.value);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching value", error);
        setLoading(false);
      }
    };

    // Fetch value immediately on component mount
    fetchValue();

    // Set interval to fetch value more frequently
    const intervalId = setInterval(fetchValue, 500); // Fetch every second

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="value-display mt-8 p-4 border border-gray-200 rounded-lg shadow-lg bg-white text-center">
      {loading ? (
        <div className="spinner">Loading...</div>
      ) : (
        <p className="text-xl font-bold">
          AI Calulated Slippage Value: {value !== null ? value : "Error fetching value"}
        </p>
      )}
    </div>
  );
};

export default ValueDisplay;
