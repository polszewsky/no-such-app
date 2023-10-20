import { Grid } from "@mui/material";
import { Link, useRouteMatch } from "react-router-dom/cjs/react-router-dom";

export default function RewardsPage() {
  let match = useRouteMatch();

  return (
    <Grid>
      Rewards Page
      <nav>
        <ul>
          <li>
            <Link to={`${match.path}/my-rewards`}>My rewards</Link>
          </li>
        </ul>
      </nav>
    </Grid>
  );
}
