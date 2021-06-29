import React from "react";
import "./NameCard.css";

function NameCard({ firstName, lastName }) {
  return (
    <div className="name-card">
      Name: {firstName + " "}
      {lastName}
    </div>
  );
}

export default NameCard;
