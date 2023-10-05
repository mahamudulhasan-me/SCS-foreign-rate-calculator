import { InputAdornment, TextField } from "@mui/material";

const WeightInput = ({ setWeight }) => {
  const handleInputChange = (event) => {
    const weight = event.target.value;
    if (weight < 0) {
      setWeight(weight);
      return;
    }
    const numericWeightValue = weight.replace(/\D/g, ""); // Remove non-numeric characters
    setWeight(numericWeightValue);
  };
  return (
    <TextField
      label="Weight"
      name="weight"
      size="small"
      type="number"
      className="weight-input"
      inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
      onChange={(e) => handleInputChange(e)}
      InputProps={{
        startAdornment: <InputAdornment position="start">kg</InputAdornment>,
      }}
    />
  );
};

export default WeightInput;
