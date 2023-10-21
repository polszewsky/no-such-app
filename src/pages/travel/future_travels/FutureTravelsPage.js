import { Grid } from "@mui/material";
import React from "react";
import PointsIndex from "../../home/PointsIndex";
import ImportCallendar from "./ImportCallendar";
import FutureTravelsTable from "./FutureTravelsTable";

export default function FutureTravelsPage({
  listOfTravels,
  showPoints = false,
}) {
  const data = [{ id: "1" }, { id: "2" }];

  return (
    <Grid container item direction="row" spacing={3}>
      {/** Points Index */}

      <Grid item xs={12}>
        <Grid
          container
          item
          direction="row"
          justifyContent="space-around"
          alignItems="flex-end"
        >
          <Grid item>
            <PointsIndex
              points={122}
              label="% emissions"
              scale={0.7}
              color="#FF3232"
            />
          </Grid>
          <Grid item>
            <PointsIndex points={78} label="possible" scale={0.5} />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <ImportCallendar />
      </Grid>

      <Grid item xs={12}>
        <Grid container item direction="row">
          {data.map((record, index) => (
            <FutureTravelsTable key={index} record={record} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
