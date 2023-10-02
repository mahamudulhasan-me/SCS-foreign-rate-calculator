import { fetchGetCarriers } from "@/utils/graphqlAPI";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";

const CarriersInput = () => {
  const [carriers, setCarriers] = useState([]);
  useEffect(() => {
    fetchGetCarriers()
      .then((res) => {
        setCarriers(res.data.data.getCarriers.result.list);
      })
      .catch((err) => console.log("err", err));
  }, []);
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel>Carrier</InputLabel>
      <Select label="Carrier">
        {carriers.map((service) => (
          <MenuItem key={service.name} value={service.name}>
            {service.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CarriersInput;
