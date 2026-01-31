import React from 'react'
import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate'
import { geoAPIoptions } from '../api';
import { GEO_API_URL } from '../api';

const Search = ({onSearchChange}) => {
    const [search, setSearch] = useState(null);

    const loadOptions = (inputValue) => { 
        return fetch (`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoAPIoptions)
        .then(response => response.json())
        .then(response => {
            return {
                options: response.data.map((city) => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}`,
                    }
                })
            };
        } )
        .catch(err => console.error(err));

    }

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }
  return (
    <div className=' mt-4 w-1/2 translate-x-1/2'>
      <AsyncPaginate  placeholder="Search for a city..." 
      debounceTimeout={500} 
      onChange={handleOnChange}
      value={search}
      loadOptions={loadOptions} />
    </div>
  )
}

export default Search
