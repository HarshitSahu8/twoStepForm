import { createSlice } from "@reduxjs/toolkit";

interface ImainFrame {
    personalStatus: boolean;
    contactStatus: boolean;
}
const initialState: ImainFrame = {
    contactStatus: true,
    personalStatus: true,
};

const mainPageData = createSlice({
    name: "mainPageData",
    initialState,
    reducers: {
        personalStatus: (state, action) => {
            state.personalStatus = action.payload;
        },
        contactStatus: (state, action) => {
            state.contactStatus = action.payload;
        },
    },
});

export const { personalStatus, contactStatus } = mainPageData.actions;
export default mainPageData.reducer;
