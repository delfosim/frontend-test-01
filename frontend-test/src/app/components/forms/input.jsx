import { TextField } from "@mui/material";

export default function InputComponent({
  isRequired,
  isDisabled,
  label,
  value,
  onChange,
}) {
  return (
    <TextField
      disabled={isDisabled}
      required={isRequired}
      id={label}
      label={label}
      value={value}
      onChange={onChange}
    />
  );
}
