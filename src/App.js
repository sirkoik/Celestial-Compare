// import logo from './logo.svg';
import "./App.css";

import Header from "./Components/UI/Header";
import SortCompare from "./Components/SortCompare/SortCompare";
import SidebySideCompare from "./Components/SidebySideCompare/SideBySideCompare";

function App() {
  return (
    <div className="App">
      <Header />
      <SortCompare />
      <SidebySideCompare />
    </div>
  );
}

export default App;
