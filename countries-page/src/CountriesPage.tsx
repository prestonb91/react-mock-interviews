import { useEffect, useState } from 'react'
import Country from './components/CountryCard';

/*
Create a simple React application that displays a list of countries and their capitals. 
Should have following:
- list of countries and capitals should be fetched from API
- list should be displayed in CountriesPage
- each country should be displayed in a separate component
- user should be able to filter list by capital 

To get all countries, call /all endpoint
To filter by capital city, use /capital/{capital} endpoint
*/

/*
Approach
- list of countries and capitals fetched from the api and stored in a state
- create a child component that the countries and capitals will be passed to (use map)
- filtered list of countries based on a selection value from filterable capitals 
- could fetch all first and list out
- when filter, could filter from existing data or make another fetch request (assume want to make another fetch request)
*/

const BASE_URL = "https://restcountries.com/v3.1";

const FILTERABLE_CAPITALS = [
  "Tallinn", 
  "Helsinki",
  "Stockholm",
  "Oslo",
  "Copenhagen",
  "Reykjavik",
]
type Capital = (typeof FILTERABLE_CAPITALS)[number];

interface Country {
  name: {
    common: string;
  };
  capital: string;
}

interface CountryCard {
    country: Country;
}

function CountriesPage() {
    const [countries, setCountries] = useState<Country[]>([]);
    const [selectedCapital, setSelectedCapital] = useState<Capital>("");
    // const [allCountries, setAllCountries] = useState<Country[]>([]);
    
    useEffect(() => {
        const fetchCountries = async() => {

            const url = selectedCapital ? `${BASE_URL}/capital/${selectedCapital}` : `${BASE_URL}/all`;

            const response = await fetch(url, {
                method: "GET",
                headers: {"Content-Type": "application/json"}
            });
    
            // here want to cycle through the fetched response and only save name and capital
            const fetchedCountries = await response.json();
            setCountries(fetchedCountries);
        }    

        fetchCountries();
    },[selectedCapital]);

    // country card component
    function CountryCard({country}: CountryCard) {

        return(
            <>
                <div className="country-container">
                    <div>Name: {country.name.common}</div>
                    <div>Capital: {country.capital}</div>
                </div>
            </>
        )
    }

    return(
        <>
            <div>
            <h1>Country List</h1>

            <label>Filter By Capital</label>
            <select
                onChange={(e) => setSelectedCapital(e.target.value as Capital)}
            >
                {FILTERABLE_CAPITALS.map(capital =>
                    <option key={capital}>{capital}</option>
                )}
            </select>

            <div>
                {countries.map((country, index) => 
                    <CountryCard
                        key={index} 
                        country={country} 
                    />
                )}
            </div>    
            </div>
        </>
    )

}

export default CountriesPage