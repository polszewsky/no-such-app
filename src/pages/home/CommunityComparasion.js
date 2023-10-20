import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import {
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalGridLines,
  XAxis,
  XYPlot,
  YAxis,
} from "react-vis";

export default function CommunityComparasion() {
  const blueData = [
    { x: "Mon", y: 6 },
    { x: "Tue", y: 8 },
    { x: "Wed", y: 5 },
    { x: "Thu", y: 9 },
    { x: "Fir", y: 11 },
    { x: "Sat", y: 10 },
    { x: "Sun", y: 7 },
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
              Community Comparasion
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
