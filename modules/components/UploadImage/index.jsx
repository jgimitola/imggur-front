import React, { useState, forwardRef } from "react";

import { Button, Paper, styled, TextField, Typography } from "@mui/material";
import UploadFile from "../UploadFile";

const Container = styled(Paper)`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  width: 500px;
  height: 400px;

  padding: 16px;
  padding-inline: 32px;
`;

const Title = styled(Typography)`
  font-size: 24px;
  text-align: center;
`;

const UploadImage = forwardRef(() => {
  const [username, setUsername] = useState("");
  const [file, setFile] = useState(null);

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("File", file);
  };

  const disabled = !username || !file;

  return (
    <Container>
      <Title>Upload Image</Title>

      <TextField
        fullWidth
        label="Username"
        value={username}
        onChange={(evt) => setUsername(evt.target.value)}
      />

      <UploadFile onChange={(evt) => setFile(evt.target.files[0])} />

      <Button variant="contained" disabled={disabled} onClick={handleUpload}>
        Upload
      </Button>
    </Container>
  );
});
UploadImage.displayName = "UploadImage";

export default UploadImage;
