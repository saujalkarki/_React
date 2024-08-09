import { createStore, applyMiddleware } from "redux";

import logger from "redux-logger";

// action name constants
const inc = "increment";
const dec = "decrement";
const incByAmt = "incrementByAmount";

// store
const store = createStore(reducer, applyMiddleware(logger.default));

let history = [];

// reducer
function reducer(state = { amount: 1 }, action) {
  if (action.type === inc) {
    // immutable
    // state.amount = state.amount + 1;
    return { amount: state.amount + 1 };
  }

  if (action.type === dec) {
    return { amount: state.amount - 1 };
  }
  if (action.type === incByAmt) {
    return { amount: state.amount + action.payload };
  }

  return state;
}

// global state
console.log(store.getState());

store.subscribe(() => {
  history.push(store.getState());
  console.log(history);
});

// Action Creators
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
  store.dispatch(incrementByAmount(10));
}, 2000);

console.log(store.getState());
