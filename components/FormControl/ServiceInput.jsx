import { gql, useQuery } from "@apollo/client";

const { Select, FormControl, InputLabel, MenuItem } = require("@mui/material");

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
const ServiceInput = ({ setService }) => {
  const { loading, error, data } = useQuery(GET_SERVICE);
  const services = data?.getServices.result.list;

  return (
    <FormControl>
      <InputLabel size="small">Service</InputLabel>
      <Select
        required
        name="service"
        label="Service"
        size="small"
        onChange={(e) => setService(e.target.value)}
      >
        {services?.map((service) => (
          <MenuItem key={service.name} value={service.name}>
            {service.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ServiceInput;
