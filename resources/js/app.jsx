import React from "react";
import Navbar from "./pages/layouts/Navbar";
import { Routes, Route } from "react-router-dom";

import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Create from "./pages/Create";

const App = () => {
    return (
        <div className="container">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Create />} />
                <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
        </div>
    );
};

export default App;
