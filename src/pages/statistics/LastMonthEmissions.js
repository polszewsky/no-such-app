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
  { "x": "1", "y": 42 },
  { "x": "2", "y": 57 },
  { "x": "3", "y": 22 },
  { "x": "4", "y": 70 },
  { "x": "5", "y": 13 },
  { "x": "6", "y": 67 },
  { "x": "7", "y": 32 },
  { "x": "8", "y": 25 },
  { "x": "9", "y": 57 },
  { "x": "10", "y": 11 },
  { "x": "11", "y": 52 },
  { "x": "12", "y": 28 },
  { "x": "13", "y": 15 },
  { "x": "14", "y": 63 },
  { "x": "15", "y": 17 },
  { "x": "16", "y": 39 },
  { "x": "17", "y": 51 },
  { "x": "18", "y": 74 },
  { "x": "19", "y": 10 },
  { "x": "20", "y": 5 },
  { "x": "21", "y": 53 },
  { "x": "22", "y": 69 },
  { "x": "23", "y": 58 },
  { "x": "24", "y": 31 },
  { "x": "25", "y": 64 },
  { "x": "26", "y": 73 },
  { "x": "27", "y": 46 },
  { "x": "28", "y": 29 },
  { "x": "29", "y": 61 },
  { "x": "30", "y": 50 }
]

const tickValues = [];
  for (let i = 0; i < blueData.length; i += 3) {
    tickValues.push(i.toString());
  }

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
                <XAxis tickValues={tickValues} />
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
