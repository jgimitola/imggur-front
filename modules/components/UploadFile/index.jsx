import React from "react";

import { Box, styled } from "@mui/material";

const Area = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 200px;

  border: 1px dashed gray;
  border-radius: 4px;
  background-color: #dfdfdf;
`;

const UploadFile = (props) => {
  const { onChange, ...rest } = props;

  return (
    <Area>
      <input type="file" onChange={onChange} accept="image/jpeg" />
    </Area>
  );
};

export default UploadFile;
