import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
    name: "list",
    initialState: {
        listItems: [],
    },
    reducers: {
        getItems: (state, action) => {
            state.listItems.unshift(action.payload);
        }
    }
});

export const { getItems } = listSlice.actions;
export default listSlice.reducer;