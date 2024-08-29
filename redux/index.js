import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import axios from "axios";

// action name constants
const inc = "increment";
const dec = "decrement";
const incByAmt = "incrementByAmount";
const init = "init";

// store
const store = createStore(
  reducer,
  applyMiddleware(logger.default, thunk.default)
);

let history = [];

// reducer
function reducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case init:
      return { amount: action.payload };

    case inc:
      return { amount: state.amount + 1 };

    case inc:
      return { amount: state.amount - 1 };

    case incByAmt:
      return { amount: state.amount + action.payload };

    default:
      return state;
  }
}

// global state
console.log(store.getState());

store.subscribe(() => {
  history.push(store.getState());
  console.log(history);
});

// Async API call
async function getUser() {
  const { data } = await axios.get("http://localhost:3000/acount");
  console.log("printed", data);
  console.log("printed", data[0].amount);
}

getUser();

// Action Creators
async function initUser(dispatch, getState) {
  const { data } = await axios.get("http://localhost:3000/acount");

  dispatch({ type: init, payload: data.amount });
}

function increment() {
  return {
    type: inc,
  };
}
function decrement() {
  return {
    type: dec,
  };
}
function incrementByAmount(value) {
  return {
    type: incByAmt,
    payload: value,
  };
}

setInterval(() => {
  store.dispatch(initUser);
}, 2000);
