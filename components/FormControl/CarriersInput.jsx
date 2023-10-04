import { gql, useQuery } from "@apollo/client";

const { Select, FormControl, InputLabel, MenuItem } = require("@mui/material");

const GET_CARRIERS = gql`
  query Query {
    getCarriers {
      result {
        list {
          name
        }
      }
    }
  }
`;
const CarriersInput = ({ setCarrier }) => {
  const { loading, error, data } = useQuery(GET_CARRIERS);
  const carriers = data?.getCarriers.result.list;

  return (
    <FormControl>
      <InputLabel size="small">Carrier</InputLabel>
      <Select
        required
        name="carrier"
        label="Carrier"
        size="small"
        onChange={(e) => setCarrier(e.target.value)}
      >
        {carriers?.map((carrier) => (
          <MenuItem key={carrier.name} value={carrier.name}>
            {carrier.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CarriersInput;
