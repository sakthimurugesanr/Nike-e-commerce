import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Ensure the path is correct

const store = configureStore({
    reducer: { // This key must be named `reducer`
        cart: cartReducer
    }
});

export default store;
