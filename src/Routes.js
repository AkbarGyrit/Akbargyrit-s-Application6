import React from "react";
import Signupwithgoogle from "pages/Signupwithgoogle";
import Webpage from "pages/Webpage";
import Signup from "pages/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/webpage" element={<Webpage />} />
        <Route path="/signupwithgoogle" element={<Signupwithgoogle />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
