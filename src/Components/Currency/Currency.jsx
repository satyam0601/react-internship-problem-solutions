import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Currency.css";

const supportedCurrency = JSON.parse(
  `[{
		"currency": "XCD",
		"name": "East Caribbean dollar",
		"symbol": "$"
	},
	{
		"currency": "EUR",
		"name": "European euro",
		"symbol": "€"
	},
	{
		"currency": "GEL",
		"name": "Georgian lari",
		"symbol": "₾"
	},
	{
		"currency": "HTG",
		"name": "Haitian gourde",
		"symbol": "G"
	},
	{
		"currency": "INR",
		"name": "Indian rupee",
		"symbol": "₹"
	},
	{
		"currency": "ILS",
		"name": "Israeli new sheqel",
		"symbol": "₪"
	},
	{
		"currency": "KZT",
		"name": "Kazakhstani tenge",
		"symbol": "лв"
	},
	{
		"currency": "KWD",
		"name": "Kuwaiti dinar",
		"symbol": "د.ك"
	},
	{
		"currency": "LSL",
		"name": "Lesotho loti",
		"symbol": "L"
	},
	{
		"currency": "USD",
		"name": "U.S. Dollar",
		"symbol": "$"
	}
]`
);

function Currency() {
  const [fromCurr, setFromCurr] = useState("USD");
  const [toCurr, setToCurr] = useState("INR");
  const [fromCurrVal, setFromCurrVal] = useState(0);
  const [toCurrVal, setToCurrVal] = useState(0);

  const handleSubmit = (event) => {
    //console.log(fromCurr, toCurr, fromCurrVal, toCurrVal);
    event.preventDefault();
    fetch(
      `https://free.currconv.com/api/v7/convert?q=${fromCurr}_${toCurr}&compact=ultra&apiKey=dd8e835c3d0a875afe5e`
    )
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setToCurrVal(
          Number((data[`${fromCurr}_${toCurr}`] * fromCurrVal).toFixed(2))
        );
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="currency">
        <input
          value={fromCurrVal}
          type="number"
          step="0.01"
          min="0.01"
          placeholder="0.0"
          onChange={(event) => {
            setFromCurrVal(event.target.value);
          }}
          required
        />
        <input
          value={toCurrVal}
          type="number"
          step="0.01"
          placeholder="0.0"
          required
          onChange={() => {
            alert("cannot change this field");
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <label htmlFor="from-curr">FROM</label>
          <select
            value={fromCurr}
            name="from-curr"
            id="from-curr"
            onChange={(event) => {
              setFromCurr(event.target.value);
            }}
          >
            {supportedCurrency.map((curr, index) => (
              <option key={index} value={curr.currency}>
                {curr.symbol + " " + curr.name + " " + curr.currency}
              </option>
            ))}
          </select>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <label htmlFor="to-curr">TO</label>
          <select
            value={toCurr}
            name="to-curr"
            id="to-curr"
            onChange={(event) => {
              setToCurr(event.target.value);
            }}
          >
            {supportedCurrency.map((curr, index) => (
              <option key={index} value={curr.currency}>
                {curr.symbol + " " + curr.name + " " + curr.currency}
              </option>
            ))}
          </select>
        </div>

        <input type="submit" value="convert" id="submitButton" />
      </form>
      <div className="page-nav">
        <Link to="/data">
          <button>PAGE 3</button>
        </Link>
        <Link to="/home">
          <button>PAGE1</button>
        </Link>
      </div>
    </>
  );
}

export default Currency;
