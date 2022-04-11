import { createSlice } from "@reduxjs/toolkit";

// interface ICounter {
//     count: number;
// }

// const initialState: ICounter = {
//     count: 20,
// };

interface Iformfields {
    firstName: string;
    lastName: string;
}

const initialState = {
    firstName: "",
    lastName: "",
};

const personalInfo = createSlice({
    name: "personalInfo",
    initialState,
    reducers: {
        firstName: (state, action) => {
            state.firstName = action.payload;
        },
        lastName: (state, action) => {
            state.lastName = action.payload;
        },
    },
});

// const counterSlice = createSlice({
//     name: "counter",
//     initialState,
//     reducers: {
//         increase: (state) => {
//             state.count++;
//         },
//         decrease: (state) => {
//             state.count--;
//         },
//     },
// });

export const { firstName, lastName } = personalInfo.actions;

export default personalInfo.reducer;
