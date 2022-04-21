import React from "react";
import "./App.css";
import { Main } from "../routes/Main";
import { CartState } from "../global/Context";

export const App = () => {
    return (
        <React.Fragment>
            <CartState>
                <Main />
            </CartState>
        </React.Fragment>
    );
};



