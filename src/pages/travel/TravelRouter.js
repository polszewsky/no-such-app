import React from "react";
import {
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom/cjs/react-router-dom";
import TravelPage from "./TravelPage";
import AddTravelRouter from "./addTravel/AddTravelRouter";

export default function TravelRoutrer() {
  let match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/add-travel`}>
        <AddTravelRouter />
      </Route>
      <Route path={`${match.path}`}>
        <TravelPage />
      </Route>
    </Switch>
  );
}
