import React from "react";

import './card.css';

export default function Card(props) {
  return (
    <div>
      <div className="country">
        <div>
          <img src={props.country.flags.svg} alt="" />
          <h2>{props.country.name.common}</h2>
          <h4>Capital: {props.country.capital}</h4>
          <p>Region: {props.country.region}</p>
          <p>Subregion: {props.country.subregion}</p>
          <p>Continent: {props.country.continents}</p>
          <p>Area: {props.country.area} sqkm</p>
          <p>Population: {props.country.population}</p>
        </div>
      </div>
    </div>
  );
}
