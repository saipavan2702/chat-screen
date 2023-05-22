import "./index.css";
import Status from "./components/Status";
import Body from "./components/Body";
import Footer from "./components/Footer";
import GroupName from "./components/GroupName";
import Details from "./components/Details";

function App() {
  return (
    <div className="app">
      <div className="top">
        <Status />
        <GroupName />
        <Details />
      </div>
      <Body />
      <Footer />
    </div>
  );
}

export default App;
