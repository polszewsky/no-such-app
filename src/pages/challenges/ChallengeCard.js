import { Badge, Grid, Paper, Typography, Button } from "@mui/material";
import React from "react";

export default function ChallengeCard() {
  return (
    <Grid container item direction="row" sx={{ marginTop: "1rem" }} xs={12}>
      <Grid item xs={12}>
        <Paper elevation={3} sx={{ padding: "1rem", background: "#2f6271" }}>
          <Grid container item direction="row">
            <Grid item xs={10}>
              <Typography variant="h5">EcoDrive</Typography>
            </Grid>
            <Badge
              badgeContent={"50pkt"}
              color="primary"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              sx={{
                "& .MuiBadge-badge": {
                  fontSize: 21,
                  height: 50,
                  minWidth: 90,
                  padding: "0.5rem",
                },
              }}
            >
              <Grid item xs={2}>
                &nbsp;
              </Grid>
            </Badge>
          </Grid>
          <Grid container item direction="row">
            <Grid item xs={12}>
              <Typography>
                Reduce your car's combustion by 10% over the next 100km.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button>Take up!</Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
