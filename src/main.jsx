import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import TPOHRMeet from "./TPOHRMeet.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/tpo-hr-meet" element={<TPOHRMeet />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
