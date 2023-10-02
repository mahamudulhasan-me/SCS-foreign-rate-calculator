import { fetchGetCarriers } from "@/utils/graphqlAPI";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";

const CarriersInput = ({ setCarrier }) => {
  const [carriers, setCarriers] = useState([]);
  useEffect(() => {
    fetchGetCarriers()
      .then((res) => {
        setCarriers(res.data.data.getCarriers.result.list);
      })
      .catch((err) => console.log("err", err));
  }, []);
  return (
    <FormControl className="w-full">
      <InputLabel>Carrier</InputLabel>
      <Select label="Carrier" onChange={(e) => setCarrier(e.target.value)}>
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
