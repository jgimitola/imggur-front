import React from "react";

import { TextField } from "@mui/material";
import { DatePicker as MUIDatePicker } from "@mui/x-date-pickers/DatePicker";

const DatePicker = (props) => {
  const { label, value, onChange, ...rest } = props;

  return (
    <MUIDatePicker
      label={label}
      value={value}
      onChange={onChange}
      inputFormat="dd/MM/yyyy"
      renderInput={(params) => <TextField {...params} />}
    />
  );
};

export default DatePicker;
