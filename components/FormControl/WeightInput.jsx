import { InputAdornment, TextField } from "@mui/material";

const WeightInput = ({ setWeight }) => {
  return (
    <TextField
      label="Weight"
      name="weight"
      size="small"
      type="number"
      onChange={(e) => setWeight(parseFloat(e.target.value))}
      InputProps={{
        startAdornment: <InputAdornment position="start">kg</InputAdornment>,
      }}
    />
  );
};

export default WeightInput;
