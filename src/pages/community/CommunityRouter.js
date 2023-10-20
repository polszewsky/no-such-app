import {
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom/cjs/react-router-dom";
import CommunityPage from "./CommunityPage";

export default function CommunityRouter() {
  let match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}`}>
        <CommunityPage />
      </Route>
    </Switch>
  );
}
