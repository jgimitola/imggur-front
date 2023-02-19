import React from "react";

import Head from "next/head";

import { utcToZonedTime, format } from "date-fns-tz";

import { Box, Button, styled, Typography } from "@mui/material";
import Link from "next/link";
import useHoursSummary from "@/modules/hooks/useHoursSummary";

const Title = styled(Typography)`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
`;

const MainContainer = styled("main")`
  box-sizing: content-box;

  display: flex;
  flex-direction: column;
  gap: 8px;

  height: 100vh;
  height: 100svh;
`;

const HoursSummary = styled(Box)`
  display: flex;
  flex-direction: column;

  padding-inline: 8px;

  height: 100%;
`;

const referenceDate = (hour) =>
  utcToZonedTime(
    new Date(`2023-01-15 ${String(hour).padStart(2, "0")}:00:00Z`),
    "America/Bogota"
  );

const Stats = () => {
  const information = useHoursSummary();
  const stats = information.data.data.result;

  return (
    <>
      <Head>
        <title>Imggur App - Stats</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainContainer>
        <Box>
          <Button href="/" LinkComponent={Link}>
            Go Back
          </Button>
          <Title>Summary of uploaded images per hour</Title>
        </Box>

        <HoursSummary>
          {stats.map((stat) => (
            <Box key={`stat-hour-${stat._id}`}>
              {format(referenceDate(stat._id), "hh aaa")}: {stat.count} posts
              created.
            </Box>
          ))}
        </HoursSummary>
      </MainContainer>
    </>
  );
};

export default Stats;
