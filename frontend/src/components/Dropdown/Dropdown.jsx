import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useId } from "react";

function Dropdown({
  id,
  value,
  onChange,
  label,
  options,
  required,
  variant = "outlined",
}) {
  const menuItems = options ? options : [{ label: "None", value: "" }];
  const keyId = useId();

  return (
    <FormControl
      required={required}
      variant={variant}
      // size='small'
      fullWidth
    >
      <InputLabel id={id}>{label}</InputLabel>
      <Select id={id} name={id} value={value} label={label} onChange={onChange}>
        {menuItems.map((menuItem, index) => (
          <MenuItem key={menuItem.value + index + keyId} value={menuItem.value}>
            {menuItem.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default Dropdown;
