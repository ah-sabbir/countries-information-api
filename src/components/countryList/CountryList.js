import React, { useEffect, useState } from "react";
import "./CountryList.style.css";
export default function CountryList() {
  //   const [countries, setCountries] = useState([]);
  const [countryName, setCountryName] = useState([]);
  useEffect(() => {
    const getCountriesName = async () => {
      const url = "https://api.worldbank.org/v2/country/?format=json";
      const res = await fetch(url);
      const data = await res.json();
      //   setCountryName(data[1]);
      return data;
    };
    getCountriesName().then((data) => setCountryName(data[1]));
  }, []);

  const getCoutryDetails = async (countryId) => {
    const url = `https://restcountries.com/v3.1/alpha?codes=${countryId}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };

  const clickHandler = (e) => {
    // console.log(e.target.id);
    getCoutryDetails(e.target.id)
      .then((data) => {
        alert(`official Name:  ${data[0].name.official}`);
        console.log(data[0]);
      })
      .catch((err) => {
        console.log("data not found");
      });
  };

  return (
    <>
      <div>CountryList</div>
      <table id="Countries">
        <thead>
          <tr key={"country_list"}>
            {countryName[0] &&
              Object.keys(countryName[0]).map((heading) => {
                return <th key={heading.index}>{heading}</th>;
              })}
          </tr>
        </thead>
        <tbody>
          {countryName.length > 0 &&
            countryName.map((country) => {
              //   console.log(Math.random() * 10);
              return (
                <tr key={country.index} onClick={clickHandler}>
                  <td key={country.id} id={country.id}>
                    {country.id}
                  </td>
                  <td key={Math.random() * 10} id={country.id}>
                    {country.iso2Code}
                  </td>
                  <td key={Math.random() * 10} id={country.id}>
                    {country.name}
                  </td>
                  <td key={Math.random() * 10} id={country.id}>
                    {country.region.value}
                  </td>
                  <td key={Math.random() * 10} id={country.id}>
                    {country.adminregion.value}
                  </td>
                  <td key={Math.random() * 10} id={country.id}>
                    {country.incomeLevel.value}
                  </td>
                  <td key={Math.random() * 10} id={country.id}>
                    {country.lendingType.value}
                  </td>
                  <td key={Math.random() * 10} id={country.id}>
                    {country.capitalCity}
                  </td>
                  <td key={Math.random() * 10} id={country.id}>
                    {country.longitude}
                  </td>
                  <td key={Math.random() * 10} id={country.id}>
                    {country.latitude}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

// id	iso2Code	name	region	adminregion	incomeLevel	lendingType	capitalCity	longitude	latitude
