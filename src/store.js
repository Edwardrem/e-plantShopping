// Import necessary functions and files
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

// Configure the store
const store = configureStore({
    reducer: {
        cart: cartReducer,  // Associate the cartReducer with the 'cart' slice of the state
    },
});

// Export the configured store
export default store;
