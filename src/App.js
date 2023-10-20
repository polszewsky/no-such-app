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
  StackedBarChart,
} from "@mui/icons-material";
import TravelRoutrer from "./pages/travel/TravelRouter";
import RewardsRouter from "./pages/rewards/RewardsRouter";
import CommunityRouter from "./pages/community/CommunityRouter";
import StatisticRouter from "./pages/statistics/StatisticRouter";

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
          <BottomNavigationAction
            component={Link}
            to="/"
            label="Home"
            icon={<Restore />}
          />

          <BottomNavigationAction
            component={Link}
            to="/statistic"
            label="Statistic"
            icon={<StackedBarChart />}
          />

          <BottomNavigationAction
            component={Link}
            to="/travel"
            label="Favorites"
            icon={<Favorite />}
          />

          <BottomNavigationAction
            component={Link}
            to="/community"
            label="Archive"
            icon={<Archive />}
          />

          <BottomNavigationAction
            component={Link}
            to="/rewards"
            label="Rewards"
            icon={<Reviews />}
          />
        </BottomNavigation>
      </Paper>
    </Container>
  );
}
