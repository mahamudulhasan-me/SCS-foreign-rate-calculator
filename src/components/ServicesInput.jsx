import { fetchGetServices } from "@/utils/graphqlAPI";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";

const ServicesInput = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetchGetServices()
      .then((res) => {
        setServices(res.data.data.getServices.result.list);
      })
      .catch((err) => console.log("err", err));
  }, []);
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel>Service</InputLabel>
      <Select label="Service">
        {services.map((service) => (
          <MenuItem key={service.name} value={service.name}>
            {service.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ServicesInput;
