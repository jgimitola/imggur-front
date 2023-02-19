import { useState } from "react";

import Head from "next/head";

import { Box, Fab, Modal, styled, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TimelineIcon from "@mui/icons-material/Timeline";
import DatePicker from "../modules/components/DatePicker";
import ImageTile from "@/modules/components/ImageContainer";
import UploadImage from "@/modules/components/UploadImage";
import useImages from "@/modules/hooks/useImages";
import Link from "next/link";

const Title = styled(Typography)`
  text-align: center;
  font-size: 32px;
  font-weight: 700;
`;

const Loading = styled(Typography)`
  text-align: center;
  font-size: 24px;
  font-weight: 500;
`;

const MainContainer = styled("main")`
  box-sizing: content-box;

  display: flex;
  flex-direction: column;
  gap: 8px;

  height: 100vh;
  height: 100svh;
`;

const DatesWrapper = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
`;

const ImagesWrapper = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: start;
  gap: 8px;

  height: 100%;

  overflow: auto;

  padding: 16px 8px;
`;

const CreateFab = styled(Fab)`
  position: absolute;
  right: 24px;
  bottom: 24px;
`;

const CreationModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  const [open, setOpen] = useState(false);
  const [dates, setDates] = useState({ startDate: null, endDate: null });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const imagesInformation = useImages(dates);
  const imagesObjects = imagesInformation.data?.data?.result || [];

  return (
    <>
      <Head>
        <title>Imggur App</title>
        <meta
          name="description"
          content="Upload images and visualize community content!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainContainer>
        <Title component="h1">Imggur</Title>

        <DatesWrapper>
          <DatePicker
            label="Start Date"
            value={dates.startDate}
            onChange={(newDate) => setDates({ ...dates, startDate: newDate })}
          />

          <DatePicker
            label="End Date"
            value={dates.endDate}
            onChange={(newDate) => setDates({ ...dates, endDate: newDate })}
          />
        </DatesWrapper>

        {imagesInformation.isLoading && <Loading>Loading...</Loading>}

        <ImagesWrapper>
          {imagesObjects.map((imgObject) => (
            <ImageTile
              key={imgObject._id}
              src={imgObject.img_url}
              username={imgObject.username}
              date={imgObject.created_date}
            />
          ))}
        </ImagesWrapper>
      </MainContainer>


      <CreateFab color="primary" onClick={handleOpen}>
        <AddIcon />
      </CreateFab>

      <CreationModal open={open} onClose={handleClose}>
        <UploadImage handleClose={handleClose} />
      </CreationModal>
    </>
  );
}
