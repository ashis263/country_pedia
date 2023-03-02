import React, { useState, useEffect } from "react";

import Card from './components/card/Card';
import Header from './components/header/header';
import './App.css';

export default function App() {
  const [countryData, setCountryData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://restcountries.com/v3.1/all")
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          throw Error;
        })
        .then((data) => {
          setCountryData(data);
          setIsLoading(false);
        })
        .catch((err) => {
          setError("Data couldn't be fetched");
          setIsLoading(false);
        });
    }, 1000);
  }, []);

  return (
    <div>
      <Header />
      {isLoading && <h4>Data is loading...</h4>}
      {error && <h4>{error}</h4>}
      <div className="countries">
        {countryData &&
          countryData.map((country, index) => {
            return (
              <Card  key={index} country={countryData[index]}/>
            );
          })}
      </div>
    </div>
  );
}
