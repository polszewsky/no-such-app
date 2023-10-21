import { Grid, Typography } from "@mui/material";
import CarsStats from "./CarsStats";
import LastMonthEmissions from "./LastMonthEmissions";

export default function StatisticPage() {
  return (
    <Grid
      container
      spacing={3}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ paddingTop: "1rem" }}
    >
      <Grid item>
        <Typography variant="h2">Statistics</Typography>
      </Grid>

      <CarsStats />
      <LastMonthEmissions />
    </Grid>
  );
}
