import { createSelector, createSlice } from "@reduxjs/toolkit";


const favoriteSlice =createSlice({
    name: 'favorite',
    initialState: {
        favoritesItemList: [],
    },
    reducers: {
        addToFavorite: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.favoritesItemList.findIndex((item) => item.id === newItem.id);
            if (existingItem !== -1) {
                state.favoritesItemList[existingItem].quantity++;
            }else {
                state.favoritesItemList.push({
                    id:newItem.id,
                    price:newItem.price,
                    quantity:1,
                    totalPrice:newItem.price,
                    name:newItem.title,
                    cover:newItem.images,
                });
            }
        },
        removeFromFavorite: (state, action) => {
            const itemId = action.payload;
            state.favoritesItemList = state.favoritesItemList.filter((item) => item.id!== itemId);
        },
        clearAll: (state) => {
            state.favoritesItemList = [];
        }
    }
})

export const favoriteActions = favoriteSlice.actions;
export const  {clearAll}=favoriteSlice.actions;

export const selectTotalFavorites =createSelector(
    (state) => state.favorite.favoritesItemList,
    (favoritesItemList) => favoritesItemList.length,
)

export default favoriteSlice;