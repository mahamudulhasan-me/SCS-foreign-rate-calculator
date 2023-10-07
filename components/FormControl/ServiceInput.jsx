import { gql, useQuery } from "@apollo/client";

const {
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Autocomplete,
  TextField,
} = require("@mui/material");

const GET_SERVICE = gql`
  query GetServices {
    getServices {
      result {
        list {
          name
        }
      }
    }
  }
`;
const ServiceInput = ({ service, setService }) => {
  const { loading, error, data } = useQuery(GET_SERVICE);
  const services = data?.getServices.result.list;

  return (
    <Autocomplete
      size="small"
      options={services?.map((option) => option.name) || []}
      value={service} // Controlled component value
      onChange={(event, value) => setService(value)} // Handle selection change
      renderInput={(params) => <TextField {...params} label="Service" />}
    />
    // <FormControl>
    //   <InputLabel size="small">Service</InputLabel>
    //   <Select
    //     name="service"
    //     label="Service"
    //     size="small"
    //     onChange={(e) => setService(e.target.value)}
    //   >
    //     {services?.map((service) => (
    //       <MenuItem key={service.name} value={service.name}>
    //         {service.name}
    //       </MenuItem>
    //     ))}
    //   </Select>
    // </FormControl>
  );
};

export default ServiceInput;
