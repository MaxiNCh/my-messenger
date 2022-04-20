import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { chatsReducer } from "./chats/reducer";
import { messagesReducer } from "./messages/reducer";
import { profileReducer } from "./profile/reducer";
import createSagaMiddleware from "redux-saga"
import addMessageFlow from "./messages/sagas";

const composeEnchancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatsReducer,
  messages: messagesReducer
})

export const store = createStore(
  rootReducer,
  composeEnchancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(addMessageFlow);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
