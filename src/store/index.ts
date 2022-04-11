import { createStore } from "redux";
import { profileReducer } from "./profile/reducer";


export const store = createStore(
  profileReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
