import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DigitalGapApp from "./components/DigitalGapApp";
import ConnectToPhone from "./components/ConnectToPhone";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<DigitalGapApp />} />
          <Route path="/connect-to-phone" element={<ConnectToPhone />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;

