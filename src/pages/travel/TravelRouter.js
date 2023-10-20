import React from "react";
import {
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom/cjs/react-router-dom";
import TravelPage from "./TravelPage";

export default function TravelRoutrer() {
  let match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}`}>
        <TravelPage />
      </Route>
    </Switch>
  );
}
