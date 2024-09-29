import Lab1 from "./Lab1";
import React from "react";
import App from "../App";
import { Route, Routes } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default function Labs() {
  return (
    <div>
      <h1>Sizhu Qu</h1>
      <h1>Labs</h1>
      <TOC />
      <Routes>
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
      </Routes>
    </div>
  );
}
