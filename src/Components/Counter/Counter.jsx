import React, { useState } from "react";
import "./Counter.css";
import { Link } from "react-router-dom";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  const buttonStyle = { fontSize: "20px", padding: "2px", width: "30px" };

  return (
    <>
      <div className="counter">
        <button style={buttonStyle} onClick={handleDecrement}>
          -
        </button>
        <h1>{count}</h1>
        <button style={buttonStyle} onClick={handleIncrement}>
          +
        </button>
      </div>
      <div className="page-nav">
        <Link to="/time">
          <button>PAGE 2</button>
        </Link>
      </div>
    </>
  );
}

export default Counter;
