import React, { useEffect, useState } from "react";
import NameCard from "./NameCard/NameCard";
import { Link } from "react-router-dom";
import "./DataComp.css";

function Data() {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState(null);

  useEffect(() => {
    fetch(
      "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole"
    )
      .then((response) => response.json())
      .then((data) => {
        setPeople(data);
        setLoading(false);
      });

    //console.log(people);
  }, []);

  return (
    <>
      {loading && <h1 style={{ fontWeight: "lighter" }}>Loading...</h1>}
      {people && (
        <div className="data">
          {people.map((person) => (
            <NameCard
              key={person.email}
              firstName={person.first}
              lastName={person.last}
            />
          ))}
        </div>
      )}
      <div className="page-nav">
        <Link to="/time">
          <button>PAGE 2</button>
        </Link>
        <Link to="/currency">
          <button>PAGE 4</button>
        </Link>
      </div>
    </>
  );
}

export default Data;
