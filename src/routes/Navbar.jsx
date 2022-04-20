import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => (
    <ul className="Nav-wrapper">
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/cart">Cart</Link>
        </li>
    </ul>
);




