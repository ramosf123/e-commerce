import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares = [logger];
}

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);

export default store;
