// import logo from './logo.svg';
import "./App.css";

import Header from "./Components/UI/Header";
import SortCompare from "./Components/SortCompare/SortCompare";
import Divider from "./Components/UI/Divider";
import SidebySideCompare from "./Components/SidebySideCompare/SideBySideCompare";
import Footer from "./Components/UI/Footer";
import { Redirect, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/sort-compare">
          <SortCompare />
        </Route>
        <Route path="/side-by-side-compare">
          <SidebySideCompare />
        </Route>
        <Route path="*">
          <Redirect to="/sort-compare" />
        </Route>
      </Switch>
      <Divider />
      <Footer />
    </div>
  );
}

export default App;
