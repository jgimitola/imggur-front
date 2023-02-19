import React, { useState, forwardRef } from "react";

import { Button, Paper, styled, TextField, Typography } from "@mui/material";
import UploadFile from "../UploadFile";
import { useMutation } from "@tanstack/react-query";
import createImage from "@/modules/controllers/createImage";

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

const UploadImage = forwardRef((props, ref) => {
  const { handleClose } = props;

  const [username, setUsername] = useState("");
  const [file, setFile] = useState(null);

  const imageMutation = useMutation({
    mutationFn: createImage,
  });

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("image", file, "blob");

    imageMutation.mutateAsync(formData, {
      onSuccess: () => {
        alert("Post created");
        handleClose?.();
      },
      onError: () => {
        alert("There was an error");
        handleClose?.();
      },
    });
  };

  const disabled = imageMutation.isLoading || !username || !file;

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
        {imageMutation.isLoading ? "Loading" : "Upload"}
      </Button>
    </Container>
  );
});
UploadImage.displayName = "UploadImage";

export default UploadImage;
