import { InputAdornment, TextField } from "@mui/material";

const WeightInput = ({ weight, setWeight }) => {
  return (
    <TextField
      label="Weight"
      name="weight"
      size="small"
      type="number"
      // value={weight}
      onChange={(e) => setWeight(parseFloat(e.target.value))}
      InputProps={{
        startAdornment: <InputAdornment position="start">kg</InputAdornment>,
      }}
    />
  );
};

export default WeightInput;
