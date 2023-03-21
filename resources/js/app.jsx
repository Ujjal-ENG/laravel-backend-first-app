import React from "react";
import Navbar from "./pages/layouts/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";

const App = () => {
    return (
        <div className="container">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
        </div>
    );
};

export default App;
