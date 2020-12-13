import throttle from "lodash/throttle";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { saveState, loadState } from "./localStorage";

const initialState = {};
const persistedState = loadState();

const middleware = [thunk];

const store = createStore(
  rootReducer,
  persistedState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
store.subscribe(
  throttle(() => {
    saveState({
      posts: store.getState().posts,
    });
  }, 1000)
);

export default store;
