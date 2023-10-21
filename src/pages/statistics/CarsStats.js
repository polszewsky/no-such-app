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

export default function CarsStats() {
  const blueData = [
    { x: "Audi A4", y: 125 },
    { x: "VW Golf", y: 224 },
    { x: "Toyota", y: 105 },
    { x: "Tesla", y: 32 },
    
    
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
              Your cars CO2 emition statistics from last month [kg]
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

          <Grid item xs={12}>
            <Alert severity="info">
              <AlertTitle> We see you're driving your cars every day</AlertTitle>
              We've created a new challenge for you - start using your bike!
              <Grid item xs={10}>
                <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    onClick={() => {}}
                >
                    See the challenge
                </Button>
                </Grid>
            </Alert>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
