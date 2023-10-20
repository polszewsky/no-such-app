import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";

/**
 * This should be our main page where we login and create router for whole app
 * @returns
 */
export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>#SustainableFuture</code> NoSuchApp
        </p>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
