import Navbar from "./pages/layouts/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
export default function Home() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
        </div>
    );
}
