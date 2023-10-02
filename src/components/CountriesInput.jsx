import { fetchGetCountriesName } from "@/utils/graphqlAPI";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
const CountriesInput = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchGetCountriesName()
      .then((res) => {
        setCountries(res.data.data.getCountries.result.list);
      })
      .catch((err) => console.log("err", err));
  }, []);
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-helper-label">Country</InputLabel>
      <Select label="Country">
        {countries.map((country) => (
          <MenuItem key={country.name} value={country.name}>
            {country.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CountriesInput;
