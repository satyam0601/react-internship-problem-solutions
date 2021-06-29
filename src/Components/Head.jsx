import React from "react";
import { Link } from "react-router-dom";

function Head() {
  return (
    <nav>
      <Link to="/">
        <h1 className="head">Problem Solutions</h1>
      </Link>
    </nav>
  );
}

export default Head;
