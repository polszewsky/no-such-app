import { Alert, AlertTitle, Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import LastTravelRecord from "./LastTravelRecord";

export default function LastTravels() {
  const lastTravels = [{ id: "ID1" }, { id: "ID2" }, { id: "ID3" }];

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
              Last Travels
            </Typography>
          </Grid>
          <Grid container item direction="row">
            <Grid item xs={12}>
              <Grid
                container
                item
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                {lastTravels.map((tv, index) => (
                  <LastTravelRecord travel={tv} key={index} />
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={{ marginTop: "1rem" }}>
            <Alert severity="info">
              <AlertTitle> We see you're flying a lot!</AlertTitle>
              We've created a new challenge for you - plan a train trip!
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
