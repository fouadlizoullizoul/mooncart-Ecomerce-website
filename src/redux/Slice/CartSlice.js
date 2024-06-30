import { createSelector, createSlice } from '@reduxjs/toolkit'
const initialState={
    itemsList:[],
    totalQuantity:0,
    totalPrice:0
}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newItem =action.payload;
            const existingItem = state.itemsList.find((item) => item.id === newItem.id);
            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }
            else {
                state.itemsList.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    cover: newItem.images
                });
                state.totalQuantity++;
            }
            state.totalPrice += newItem.price;
    },
    removeFromCart: (state, action) => {
        const itemId = action.payload;
        const existingItem = state.itemsList.find((item) => item.id === itemId);
        if (existingItem) {
            if (existingItem.quantity > 1) {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            } else {
                state.itemsList = state.itemsList.filter((item) => item.id!== itemId);
                state.totalQuantity--;
            }
            state.totalPrice -= existingItem.price;
        }
    },
    removeFromAllCart: (state,action) => {
            const id =action.payload;
            state.itemsList = state.itemsList.filter((item) => item.id!== id);
            state.totalQuantity -=state.itemsList.reduce(
                (acc, item) => acc + item.quantity,
                0
            )
    },
    clearCart(state) {
        state.itemsList = [];
        state.totalQuantity = 0;
        state.totalPrice = 0;
    }
}
}
)

export const { addToCart } = CartSlice.actions;

export const { removeFromCart, removeFromAllCart, clearCart } = CartSlice.actions;
export const CartActions = CartSlice.actions
export const selectTotalQuantity =createSelector(
    state => state.cart.itemsList,
    (itemsList)=>itemsList.reduce((acc) => acc + 1 , 0)
)

export const selectTotalPrice = createSelector(
    state => state.cart.itemsList,
    (itemsList)=>itemsList.reduce((acc, item) => acc + item.totalPrice, 0)
)
export default CartSlice.reducer;