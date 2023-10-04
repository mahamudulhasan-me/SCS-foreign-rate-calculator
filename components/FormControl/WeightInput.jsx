import { InputAdornment, TextField } from "@mui/material";

const WeightInput = () => {
  return (
    <TextField
      label="Weight"
      name="weight"
      size="small"
      type="number"
      InputProps={{
        startAdornment: <InputAdornment position="start">kg</InputAdornment>,
      }}
    />
  );
};

export default WeightInput;
