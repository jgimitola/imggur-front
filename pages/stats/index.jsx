import React from "react";

import Head from "next/head";

import { utcToZonedTime, format } from "date-fns-tz";

import { Box, Button, styled, Typography } from "@mui/material";

import Link from "next/link";
import useHoursSummary from "@/modules/hooks/useHoursSummary";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const Title = styled(Typography)`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
`;

const MainContainer = styled("main")`
  box-sizing: content-box;

  height: 100vh;
  height: 100svh;
`;

const referenceDate = (hour) =>
  utcToZonedTime(
    new Date(`2023-01-15 ${String(hour).padStart(2, "0")}:00:00Z`),
    "America/Bogota"
  );

const formatStats = (stats) => {
  const formatHour = stats.map((crr) => ({
    ...crr,
    hour: crr._id,
    _id: format(referenceDate(crr._id), "hh aaa"),
  }));

  return formatHour;
};

const Stats = () => {
  const information = useHoursSummary();
  const stats = information.data.data.result;

  const formatedStats = formatStats(stats);

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

        <ResponsiveContainer width="100%" height={300}>
          <BarChart width={150} height={40} data={formatedStats}>
            <XAxis dataKey="_id" />
            <YAxis />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </MainContainer>
    </>
  );
};

export default Stats;
