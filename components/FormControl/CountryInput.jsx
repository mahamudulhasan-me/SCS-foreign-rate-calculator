import { gql, useQuery } from "@apollo/client";
import { List, ListItem, ListItemText, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const GET_COUNTRIES = gql`
  query GetServices {
    getCountries {
      result {
        list {
          name
        }
      }
    }
  }
`;

const CountryInput = ({ setCountry }) => {
  const [inputValue, setInputValue] = useState("");
  const [showList, setShowList] = useState(true);
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
  const { loading, error, data } = useQuery(GET_COUNTRIES);
  const countries = data?.getCountries.result.list;
  const listRef = useRef(null);

  const handleInputChange = (e) => {
    const country = e.target.value;
    setInputValue(country);
    setCountry(country);
    setShowList(true);
    setSelectedItemIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedItemIndex((prevIndex) =>
        prevIndex < filteredCountries.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedItemIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    } else if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission when Enter key is pressed
      if (selectedItemIndex !== -1) {
        handleListItemClick(filteredCountries[selectedItemIndex].name);
      }
    }
  };

  const handleListItemClick = (countryName) => {
    setInputValue(countryName);
    setCountry(countryName);
    setShowList(false);
  };

  const filteredCountries = countries?.filter((country) =>
    country.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  useEffect(() => {
    setSelectedItemIndex(-1);
  }, [inputValue]);

  return (
    <div className="relative">
      <TextField
        fullWidth
        name="country"
        label="Country"
        size="small"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      {showList && inputValue && (
        <List
          ref={listRef}
          className="absolute mt-2 max-h-screen border rounded-md shadow-lg bg-white scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 left-0 right-3"
        >
          {filteredCountries?.slice(0, 8).map((country, index) => (
            <ListItem
              key={country.name}
              button
              selected={selectedItemIndex === index}
              onClick={() => handleListItemClick(country.name)}
            >
              <ListItemText primary={country.name} />
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default CountryInput;
