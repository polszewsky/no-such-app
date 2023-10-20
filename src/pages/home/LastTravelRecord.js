import { Grid, Typography } from "@mui/material";
import React from "react";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import { ArrowRight, ArrowRightAlt } from "@mui/icons-material";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

export default function LastTravelRecord() {
  const navigate = useHistory();

  return (
    <Grid
      container
      item
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      sx={{
        minHeight: "54px",
        border: "0px solid #f8f8f8",
        marginTop: "0.5rem",
        background: "#f4f4f4",
      }}
    >
      <Grid item>
        <AirplanemodeActiveIcon />
      </Grid>
      <Grid item>
        <Typography>Cracow, PL {<ArrowRightAlt />} Heartrow, UK</Typography>
      </Grid>
      <Grid item>2023.10.19</Grid>
      <Grid item>40 CO₂</Grid>
      <Grid item onClick={() => navigate.push("/travel/1")}>
        <ArrowRight />
      </Grid>
    </Grid>
  );
}
