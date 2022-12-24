import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AddEmployee from "../components/AddEmployee";
import NavBar from "../components/NavBar";
import Employees from "../pages/Employees";
import Upload from "../pages/Upload";

function RouterContent() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="employees" element={<Employees />} />
        <Route path="employees/new" element={<AddEmployee />} />
        <Route path="upload" element={<Upload />} />
        <Route path="/*" element={<Navigate to="employees" />} />
      </Routes>
    </>
  );
}

export default RouterContent;
