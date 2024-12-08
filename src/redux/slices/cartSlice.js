import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: [
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

    },
});

export default cartSlice.reducer;