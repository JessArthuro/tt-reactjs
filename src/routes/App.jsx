import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Employees from "../pages/Employees";
import Upload from "../pages/Upload";
import NotFound from "../components/NotFound";


function App() {
  return (
    <HashRouter>
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
