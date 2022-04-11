import { combineReducers } from "redux";

import PersonalFormData from "@redux/slices/personalFormData";
import ContactFormData from "@redux/slices/ContactFormData";

const rootReducer = combineReducers({ PersonalFormData, ContactFormData });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
