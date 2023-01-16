import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { SignProvider } from "./contexts/signContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./nav";
import { About } from "./About";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <SignProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </SignProvider>
  </BrowserRouter>
);
