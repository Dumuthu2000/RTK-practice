import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [
        {name: "Apple", price: 10},
        {name: "Banana", price: 30},
        {name: "Orange", price: 50},
        {name: "Mango", price: 100},
    ],
    cart: [],
    totalPrice: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart = [...state.cart, action.payload];
            state.totalPrice = state.totalPrice + action.payload.price;
        },
        removeCartItem: (state, action) => {
            state.cart = state.cart.filter((_, index) => index !== action.payload.index );
            state.totalPrice = state.totalPrice - action.payload.price;
        }
    },
});

export const { addToCart, removeCartItem } = cartSlice.actions;
export default cartSlice.reducer;