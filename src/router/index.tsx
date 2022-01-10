import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Contributor } from "../pages";

const PageRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/contributors' element={<Contributor />} />
    </Routes>
  );
};

export default PageRoutes;
