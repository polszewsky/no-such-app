import {
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom/cjs/react-router-dom";
import CommunityTabWrapper from "./CommunityTabWrapper";

export default function CommunityRouter() {
  let match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}`}>
        <CommunityTabWrapper />
      </Route>
    </Switch>
  );
}
