import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { chatsReducer } from "./chats/reducer";
import { messagesReducer } from "./messages/reducer";
import { profileReducer } from "./profile/reducer";
import createSagaMiddleware from "redux-saga"
import addMessageFlow from "./messages/saga";
import requestWatcherSaga from "./holidays/saga";
import holidaysReducer from "./holidays/reducer";

const composeEnchancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatsReducer,
  messages: messagesReducer,
  holidays: holidaysReducer
})

export const store = createStore(
  rootReducer,
  composeEnchancers(applyMiddleware(sagaMiddleware))
);

const sagas = [
  addMessageFlow,
  requestWatcherSaga
]
sagas.forEach((saga) => sagaMiddleware.run(saga));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
