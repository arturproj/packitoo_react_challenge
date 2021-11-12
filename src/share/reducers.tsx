import { combineReducers } from "redux";
import briefReducer from "../features/Brief/reducer";
import loadingReducer from "../features/Londing/reducer";

export default combineReducers({ briefReducer, loadingReducer });
