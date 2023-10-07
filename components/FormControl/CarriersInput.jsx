import { gql, useQuery } from "@apollo/client";
import { Autocomplete, TextField } from "@mui/material";

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

const CarriersInput = ({ carrier, setCarrier }) => {
  const { loading, error, data } = useQuery(GET_CARRIERS);
  const carriers = data?.getCarriers.result.list;

  return (
    <Autocomplete
      size="small"
      options={carriers?.map((option) => option.name) || []}
      value={carrier} // Controlled component value
      onChange={(event, value) => setCarrier(value)} // Handle selection change
      renderInput={(params) => <TextField {...params} label="Carrier" />}
    />
  );
};

export default CarriersInput;
