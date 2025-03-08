import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Import HelpButton normally (it's already optimized)
import HelpButton from "./components/HelpButton";

// Lazy load route components for code splitting
const LandingPage = lazy(() => import("./components/LandingPage"));
const ConnectToPhone = lazy(() => import("./components/ConnectToPhone"));
const ConfidentAssesment = lazy(() =>
  import("./components/ConfidentAssesment")
);
const Lessons = lazy(() => import("./components/Lessons"));



const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/connect-to-phone" element={<ConnectToPhone />} />
          <Route path="/confident-assesment" element={<ConfidentAssesment />} />
          <Route path="/lessons" element={<Lessons />} />
        </Routes>
        <HelpButton />
      </Suspense>
    </Router>
  );
};

export default App;
