
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DeepSeekPage from "./DeepSeekPage";
import DeepSeekLoginPage from "./DeepSeekLoginPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DeepSeekPage />} />
        <Route path="/login" element={<DeepSeekLoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;