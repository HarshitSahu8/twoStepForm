import { createSlice } from "@reduxjs/toolkit";

interface Iformfields {
    email: string;
    phoneNo: string;
    alternateNo: string;
}
const initialState: Iformfields = {
    email: "",
    phoneNo: "",
    alternateNo: "",
};

const contactInfo = createSlice({
    name: "contactInfo",
    initialState,
    reducers: {
        email: (state, action) => {
            state.email = action.payload;
        },
        phoneNo: (state, action) => {
            state.phoneNo = action.payload;
        },
        alternateNo: (state, action) => {
            state.alternateNo = action.payload;
        },
    },
});

export const { email, phoneNo, alternateNo } = contactInfo.actions;
export default contactInfo.reducer;
