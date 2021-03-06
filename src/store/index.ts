import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { chatsReducer } from "./chats/reducer";
import { messagesReducer } from "./messages/reducer";
import { profileReducer } from "./profile/reducer";
import createSagaMiddleware from "redux-saga"
import addMessageFlow from "./messages/saga";
import requestWatcherSaga from "./holidays/saga";
import holidaysReducer from "./holidays/reducer";
import { userReducer } from "./user/reducer";
import authUserFlow from "./user/saga";

const composeEnchancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatsReducer,
  messages: messagesReducer,
  holidays: holidaysReducer,
  user: userReducer
})

export const store = createStore(
  rootReducer,
  composeEnchancers(applyMiddleware(sagaMiddleware))
);

const sagas = [
  addMessageFlow,
  authUserFlow,
  requestWatcherSaga
]
sagas.forEach((saga) => sagaMiddleware.run(saga));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
