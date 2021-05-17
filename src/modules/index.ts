import { combineReducers } from "redux";
import movies from "./movies";
import scripts from "./scripts"

const rootReducer = combineReducers({
    movies,
    scripts,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
