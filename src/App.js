import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import {
  BottomNavigation,
  BottomNavigationAction,
  Container,
  Paper,
} from "@mui/material";
import React from "react";
import {
  Archive,
  Favorite,
  Restore,
  Reviews,
  StackedBarChart
} from "@mui/icons-material";
import TravelRoutrer from "./pages/travel/TravelRouter";
import RewardsRouter from "./pages/rewards/RewardsRouter";
import CommunityRouter from "./pages/community/CommunityRouter";
import StatisticRouter from "./pages/statistics/StatisticRouter";
import AddTravelRouter from "./pages/addTravel/AddTravelRouter";

/**
 * This should be our main page where we login and create router for whole app
 * @returns
 */
export default function App() {
  const [value, setValue] = React.useState(0);

  return (
    <Container>
      <Switch>
        <Route path="/rewards">
          <RewardsRouter />
        </Route>
        <Route path="/statistic">
          <StatisticRouter />
        </Route>
        <Route path="/community">
          <CommunityRouter />
        </Route>
        <Route path="/travel">
          <TravelRoutrer />
        </Route>
        <Route path="/addTravel">
          <AddTravelRouter />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <Link to="/">
            <BottomNavigationAction label="Home" icon={<Restore />} />
          </Link>
          <Link to="/statistic">
            <BottomNavigationAction
              label="Statistic"
              icon={<StackedBarChart />}
            />
          </Link>
          <Link to="/travel">
            <BottomNavigationAction label="Favorites" icon={<Favorite />} />
          </Link>
          <Link to="/community">
            <BottomNavigationAction label="Archive" icon={<Archive />} />
          </Link>
          <Link to="/rewards">
            <BottomNavigationAction label="Rewards" icon={<Reviews />} />
          </Link>
        </BottomNavigation>
      </Paper>
    </Container>
  );
}
