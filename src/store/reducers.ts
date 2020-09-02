import { combineReducers } from "redux";
import { userReducer } from "./user/userReducer";

export type RootState = ReturnType<typeof rootReducer>;
export const rootReducer = combineReducers({
  user: userReducer,
});
