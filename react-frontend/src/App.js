// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ConnectToPhone from "./components/ConnectToPhone";
import ConfidentAssesment from "./components/ConfidentAssesment";
import Lessons from "./components/Lessons";
import HelpButton from "./components/HelpButton";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/connect-to-phone" element={<ConnectToPhone />} />
          <Route path="/confident-assesment" element={<ConfidentAssesment />} />
          <Route path="/lessons" element={<Lessons />} />
        </Routes>
        <HelpButton />
      </div>
    </Router>
  );
};

export default App;
