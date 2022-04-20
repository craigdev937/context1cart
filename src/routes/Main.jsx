import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "../cart/Cart";
import { ProductList } from "../containers/ProductList";
import { Navbar } from "./Navbar";

export const Main = () => (
    <BrowserRouter>
        <React.Fragment>
            <Navbar />
            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </React.Fragment>
    </BrowserRouter>
);


