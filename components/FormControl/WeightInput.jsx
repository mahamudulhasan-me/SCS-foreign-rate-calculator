import { InputAdornment, TextField } from "@mui/material";

const WeightInput = ({ setWeight }) => {
  const handleInputChange = (event) => {
    const weight = event.target.value;
    const numericWeight = weight.replace(/[^0-9]/g, ""); // Remove non-numeric characters
    setWeight(numericWeight);
  };
  return (
    <TextField
      label="Weight"
      name="weight"
      size="small"
      type="number"
      inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
      onChange={(e) => handleInputChange(e)}
      InputProps={{
        startAdornment: <InputAdornment position="start">kg</InputAdornment>,
      }}
    />
  );
};

export default WeightInput;
