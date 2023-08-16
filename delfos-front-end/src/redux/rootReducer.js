import { combineReducers } from "redux";
import searchReducer from "./search/reducer";
import widgetsReducer from "./widgets/reducer";

const rootReducer = combineReducers({
  searchReducer,
  widgetsReducer,
});

export default rootReducer;
