import { gql, useQuery } from "@apollo/client";
import { Autocomplete, TextField } from "@mui/material";

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

const CountryInput = ({ country, setCountry }) => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);
  const countries = data?.getCountries.result.list || [];

  const getCapitalizedOption = (option) => {
    return option.charAt(0) + option.slice(1).toLowerCase();
  };

  return (
    <Autocomplete
      size="small"
      options={countries.map((option) => getCapitalizedOption(option.name))}
      value={country}
      onChange={(event, value) => setCountry(value)}
      getOptionLabel={(option) => option} // Specify how options are displayed
      filterOptions={(options, { inputValue }) =>
        options.filter((option) =>
          option.toLowerCase().startsWith(inputValue.toLowerCase())
        )
      } // Filter options based on input value
      renderInput={(params) => <TextField {...params} label="Service" />}
    />
  );
};

export default CountryInput;
