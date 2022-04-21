import { actionTypes } from "./actionTypes";

export const Reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const { cartItems } = state;
            const { currentProductItem } = action;
            let updateCartItems = [...cartItems];
            console.log(updateCartItems, state);

            const checkIndexOfCurrentItem = updateCartItems.findIndex(
                (item) => item.id === currentProductItem.id);

            if (checkIndexOfCurrentItem === -1) {
                updateCartItems.push({
                    ...currentProductItem, quantity: 1,
                })
            } else {
                const checkIfTheItemIsAlreadyExists = 
                updateCartItems.find((item) => item.id === 
                    updateCartItems[checkIndexOfCurrentItem].id);
                console.log(checkIfTheItemIsAlreadyExists);
                updateCartItems[checkIndexOfCurrentItem] = {
                    ...checkIfTheItemIsAlreadyExists,
                    quantity: checkIfTheItemIsAlreadyExists.quantity + 1
                };
                console.log(updateCartItems);
            };
            return {
                ...state,
                cartItems: updateCartItems,
            };

        case actionTypes.REMOVE_FROM_CART:
            const { currentIdToBeDeleted, typeofDelete } = action;
            let updateCartItemsAfterDelete = [...state.cartItems];
            console.log(
                currentIdToBeDeleted,
                typeofDelete,
                updateCartItemsAfterDelete
            );

            if (typeofDelete === "partial") {
                const indexOfCurrentItemToBeDeleted = 
                    updateCartItemsAfterDelete.findIndex(
                        (item) => item.id === currentIdToBeDeleted);
                updateCartItemsAfterDelete[indexOfCurrentItemToBeDeleted] = {
                    ...updateCartItemsAfterDelete[indexOfCurrentItemToBeDeleted],
                    quantity: updateCartItemsAfterDelete[indexOfCurrentItemToBeDeleted]
                    .quantity - 1,
                };
            } else {
                updateCartItemsAfterDelete = 
                updateCartItemsAfterDelete.filter(
                    (item) => item.id !== currentIdToBeDeleted);
            };

            return {
                ...state,
                cartItems: updateCartItemsAfterDelete,
            };

        default:
            return state;
    };
};




