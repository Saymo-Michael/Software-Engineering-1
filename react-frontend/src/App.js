import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ConnectToPhone from "./components/ConnectToPhone";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/connect-to-phone" element={<ConnectToPhone />} /> 
        </Routes>
      </Router>
    </div>
  );
}
export default App;

