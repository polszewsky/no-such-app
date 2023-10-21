import { Grid } from "@mui/material";
import CarsStats from "./CarsStats";


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
      <CarsStats />
    </Grid>
  );
}
