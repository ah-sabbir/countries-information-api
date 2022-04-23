// @flow
import * as React from "react";
import "./Country.style.css";
const Country = (props) => {
  return (
    <div className="country">
      <h2 key={props.name}> {props.name} </h2>
      <p key={props.capital}>Capital: {props.capital}</p>
      <h2 key={props.key}> Common Language: {props.language} </h2>
      <img src={props.flag} alt="flag" />
    </div>
  );
};

export default Country;
