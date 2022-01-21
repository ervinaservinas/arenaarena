import {createSlice, current} from "@reduxjs/toolkit";

export const inventorySlice = createSlice({
    name: "inventory",
    initialState: {
        value: []
    },
    reducers: {
        addToInventory: (state, action) => {
            state.value.push(action.payload);
        },
        removeingFromInventory: (state, action) => {
            state.value.splice(action.payload, 1);
        },
        removePotion: (state, action) => {
            const index = current(state.value).indexOf(action.payload);
            state.value.splice(index, 1);
        }
    }
})


export const {addToInventory, removeingFromInventory, removePotion} = inventorySlice.actions;

export default inventorySlice.reducer;