import { createSlice } from "@reduxjs/toolkit";

const showsSlice = createSlice({
    name: "shows",
    initialState: {
        allShows: null,
        singleShow: null,
    },
    reducers: {
        addAllShows: (state, action) => {
            state.allShows = action.payload;
        },
        addSingleShow: (state, action) => {
            state.singleShow = action.payload;
        },
    },
});

export const {addAllShows, addSingleShow} = showsSlice.actions;

export default showsSlice.reducer;