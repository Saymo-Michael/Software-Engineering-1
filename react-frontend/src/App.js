import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DigitalGapApp from "./components/DigitalGapApp";
import ConnectToPhone from "./components/ConnectToPhone";
import ConfidentAssesment from "./components/ConfidentAssesment";
import Lessons from "./components/Lessons";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<DigitalGapApp />} />
          <Route path="/connect-to-phone" element={<ConnectToPhone />} />
          <Route path="/confident-assesment" element={<ConfidentAssesment />} />
          <Route path="/lessons" element={<Lessons />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
