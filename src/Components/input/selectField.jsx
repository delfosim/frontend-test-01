import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export const SelectField = ({
  id,
  errors,
  register,
  array,
  setState,
  selectName,
  margin,
}) => {
  return (
    <FormControl sx={{ width: "100%" }}>
      <InputLabel id={id}>{selectName}</InputLabel>
      <Select
        sx={{ marginBottom: [margin,margin,0,0] }}
        id={id}
        labelId={id}
        label={selectName}
        inputProps={{
          inputRef: (ref) => {
            if (!ref) return;
          },
        }}
        error={errors}
        helperText={errors}
        {...register}
      >
        {array && array.map((el, index) => (
          <MenuItem
            key={`${el.name}-${index}`}
            value={el.name}
            onClick={() => setState(el.name)}
          >
            {el.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
