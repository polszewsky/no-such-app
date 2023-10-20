import { Grid } from "@mui/material";
import CommuteIcon from "@mui/icons-material/Commute";
import Fab from "@mui/material/Fab";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Grid
      container
      spacing={3}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <h1 alignItems="center" style={{ marginTop: 50 }}>
        Home page
      </h1>
      <Grid>
        <Link to="/travel/add-travel">
          <Fab
            color="primary"
            aria-label="add"
            sx={{
              position: "fixed",
              bottom: (theme) => theme.spacing(9),
              right: (theme) => theme.spacing(2),
            }}
          >
            <CommuteIcon style={{ fontSize: 42 }} />
          </Fab>
        </Link>
      </Grid>
    </Grid>
  );
}
