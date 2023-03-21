import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <nav>
                <ul className="flex justify-center items-center text-3xl font-bold gap-10 p-5">
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact-us">ContactUs</NavLink>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
