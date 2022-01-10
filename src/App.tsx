import React from "react";
import { BrowserRouter } from "react-router-dom";
import PageRoutes from "./router";
import "./assets/css/init.css";
import "./assets/css/index.css";
import "./assets/css/media.css";

function App() {
  return (
    <BrowserRouter>
      <PageRoutes />
    </BrowserRouter>
  );
}

export default App;
