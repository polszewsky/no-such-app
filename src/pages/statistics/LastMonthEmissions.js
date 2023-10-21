import { Alert, AlertTitle, Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import {
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalGridLines,
  XAxis,
  XYPlot,
  YAxis,
} from "react-vis";

export default function LastMonthEmissions() {
  //TODO: what scale ?
  const blueData = [
    { x: "Mon", y: 68 },
    { x: "Tue", y: 89 },
    { x: "Wed", y: 58 },
    { x: "Thu", y: 99 },
    { x: "Fir", y: 118 },
    { x: "Sat", y: 109 },
    { x: "Sun", y: 77 },
  ];

  return (
    <Grid
      container
      item
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Paper sx={{ padding: "0.5rem" }} elevation={3}>
          <Grid container item direction="row">
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              Your last month CO2 emissions [kg]
            </Typography>
          </Grid>
          <Grid
            container
            item
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <XYPlot xType="ordinal" height={300} width={400} xDistance={100}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <VerticalBarSeries data={blueData} />
              </XYPlot>
            </Grid>
          </Grid>
          
        </Paper>
      </Grid>
    </Grid>
  );
}
