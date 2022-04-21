import React from "react";
import { actionTypes } from "./actionTypes";
import { Reducer } from "./Reducer";

export const CartContext = React.createContext(null);

const initialState = {
    cartItems: []
};

export const CartState = ({ children }) => {
    const [state, dispatch] = 
    React.useReducer(Reducer, initialState);

    const addToCart = (currentProductItem) => {
        dispatch({
            type: actionTypes.ADD_TO_CART,
            currentProductItem: currentProductItem
        });
    };

    const removeFromCart = 
    (currentIdToBeDeleted, typeOfDelete) => {
        dispatch({
            type: actionTypes.REMOVE_FROM_CART,
            currentIdToBeDeleted, 
            typeOfDelete
        })
    };

    return (
        <CartContext.Provider
            value={{
                cartItems: state.cartItems,
                addToCart,
                removeFromCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
};



