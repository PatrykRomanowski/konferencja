import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import FontLoader from "./fonts/FontLoader";

import MainSite from "./screens/MainSite";
import ContactComponent from "./screens/Contact";
import AboutComponent from "./screens/About";

function App() {
  return (
    <>
      <FontLoader />

      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<MainSite />}></Route>
            <Route exact path="/about" element={<AboutComponent />}></Route>
            <Route exact path="/contact" element={<ContactComponent />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
