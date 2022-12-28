import { TextField } from "@mui/material";

export const InputBox = ({ label, errors, register }) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      fullWidth
      autoComplete="off"
      inputProps={{ style: { fontSize: 15 } }}
      InputLabelProps={{ style: { fontSize: 15, color: "GrayText" } }}
      error={errors}
      helperText={errors}
      {...register}
    />
  );
};
