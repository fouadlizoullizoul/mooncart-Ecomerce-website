import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Slice/CartSlice'
import favoriteSlice from "./Slice/favouriteSlice";
export const store= configureStore({
    reducer:{
        cart: cartReducer,
        favorite: favoriteSlice.reducer,
    }
})