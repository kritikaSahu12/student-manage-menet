
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Createuser from "./components/Createuser";
import Alluser from "./components/Alluser";
import Updatedata from "./components/Updatedata";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-950">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Createuser" element={<Createuser />} />
          <Route path="/Alluser" element={<Alluser />} />

          {/* Support the existing plural route too */}
          <Route
            path="/allusers"
            element={<Navigate to="/Alluser" replace />}
          />

          <Route path="/updatedata/:id" element={<Updatedata />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
