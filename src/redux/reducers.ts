import { combineReducers } from "redux";

import PersonalFormData from "@redux/slices/personalFormData";
import ContactFormData from "@redux/slices/ContactFormData";
import MainPageData from "@redux/slices/mainPageData";

const rootReducer = combineReducers({
    PersonalFormData,
    ContactFormData,
    MainPageData,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
