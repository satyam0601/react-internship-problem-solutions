import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function TimeDisplay() {
  const [currTime, setCurrTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    let timer = setInterval(() => {
      setCurrTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <h1>{currTime}</h1>
      <div className="page-nav">
        <Link to="/home">
          <button>Page1</button>
        </Link>
        <Link to="/data">
          <button>Page3</button>
        </Link>
      </div>
    </>
  );
}

export default TimeDisplay;
