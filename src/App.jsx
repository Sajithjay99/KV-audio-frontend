import React from "react";
import "./App.css";
import AdminPage from "./Pages/Admin/AdminPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/homePage";
import Testing from "./components/testing";
import LoginPage from "./Pages/Login/LoginPage";


function App() {
  return (
    <BrowserRouter>
      <Routes path="/*">
        <Route path="/testing" element={<Testing />}></Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
