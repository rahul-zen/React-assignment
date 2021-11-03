import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../store/reducer";
import ReduxThunk from "redux-thunk";
export const Store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));
