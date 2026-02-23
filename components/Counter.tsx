"use client";
import React, { useEffect, useState } from "react";

const CountUp = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 1000) {
      const timeout = setTimeout(() => {
        setCount(count + 1);
      }, 1);
    }
  }, [count]);

  return (
    <div>
      <p>{count}</p>
    </div>
  );
};

export default CountUp;
