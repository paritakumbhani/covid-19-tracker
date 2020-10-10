import React, { useEffect, useState } from "react";
import { FormControl, MenuItem, Select } from "@material-ui/core";
import "./App.css";

function App() {
  const [countries, setCountries] = useState(["USA", "UK", "INDIA"]);
  //https://disease.sh/v3/covid-19/countries

    useEffect(() => {
      const getCountiresData = async ()=> {
        await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data)=>{
          const countries = data.map((country)=>(
            {
              name:  country.country,
              value: country.countryInfo.iso2
            }
          ));
          setCountries(countries);
        });
      };
      getCountiresData();
    },[]);
  return (
    <div className="app">
      <div className="app_header">
        <h1>Covid-19 Tracker</h1>
        <FormControl className="app_dropdown">
          <Select variant="outlined" var="abc">
            {/*loop through all the countries and show a drop down list of the countries */}

            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
            {/* <MenuItem value="worldwide">Worldwide</MenuItem>
          <MenuItem value="worldwide">Option 2</MenuItem>
          <MenuItem value="worldwide">Option 3</MenuItem>
          <MenuItem value="worldwide">Option 4</MenuItem>*/}
          </Select>
        </FormControl>
      </div>

      {/*Header*/}
      {/* Title + select input drodown field*/}

      {/*InfoBoxes*/}
      {/*InfoBoxes*/}
      {/*InfoBoxes*/}

      {/*Tables */}
      {/*Graph*/}

      {/*Map*/}
    </div>
  );
}

export default App;
