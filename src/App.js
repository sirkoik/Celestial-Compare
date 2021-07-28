// import logo from './logo.svg';
import "./App.css";

import Header from "./Components/UI/Header";
import SortCompare from "./Components/SortCompare/SortCompare";
import Divider from "./Components/UI/Divider";
import SidebySideCompare from "./Components/SidebySideCompare/SideBySideCompare";
import Footer from "./Components/UI/Footer";

function App() {
  return (
    <div className="App">
      <Header headerType="headerMain" />
      <SortCompare />
      <Header headerType="compareTwo" />
      <SidebySideCompare />
      <Divider />
      <Footer />
    </div>
  );
}

export default App;
