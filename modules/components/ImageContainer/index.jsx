import React from "react";

import { Box, styled, Typography } from "@mui/material";
import Image from "next/image";
import { format, utcToZonedTime } from "date-fns-tz";

const Container = styled(Box)`
  position: relative;

  overflow: hidden;

  width: 150px;
  height: 150px;

  border: 1px solid black;
  border-radius: 4px;
`;

const Details = styled(Box)`
  position: absolute;

  user-select: none;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 4px;

  opacity: 0;

  :hover {
    opacity: 1;
    background-color: #80808092;
  }

  transition: opacity 250ms;
`;

const DetailText = styled(Typography)`
  color: white;
  font-weight: 600;
`;

const ImageTile = (props) => {
  const { src, username, date, ...rest } = props;

  const zonedDate = utcToZonedTime(date, "America/Bogota");

  const formattedDate = format(zonedDate, "dd/MM/yyyy");
  const formattedTime = format(zonedDate, "hh:mm aaa");

  return (
    <Container>
      <Image src={src} alt="" fill />
      <Details>
        <DetailText>{username}</DetailText>
        <DetailText>{formattedDate}</DetailText>
        <DetailText>{formattedTime}</DetailText>
      </Details>
    </Container>
  );
};

export default ImageTile;
