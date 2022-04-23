import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./CountryList.style.css";

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const url = "https://restcountries.com/v3.1/all";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <>
      <div key={"Countries"}>CountryList</div>
      <div className="CountryList" key={"CountryList"}>
        {countries &&
          countries.map((country) => {
            return (
              <Country
                key={country.id}
                name={country.name.common}
                capital={countries[0] && countries[0].capital}
                language={
                  country.languages && Object.values(country.languages)[0]
                }
                flag={country.flags.png}
              />
            );
          })}
      </div>
    </>
  );
};
export default CountryList;
// id	iso2Code	name	region	adminregion	incomeLevel	lendingType	capitalCity	longitude	latitude
