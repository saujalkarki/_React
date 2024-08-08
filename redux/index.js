import { createStore } from "redux";

// store
const store = createStore(reducer);
let history = [];

// reducer
function reducer(state = { amount: 1 }, action) {
  if (action.type === "increment") {
    // immutable
    // state.amount = state.amount + 1;
    return { amount: state.amount + 1 };
  }

  return state;
}

// global state
console.log(store.getState());

store.subscribe(() => {
  history.push(store.getState());
  console.log(history);
});

setInterval(() => {
  store.dispatch({
    type: "increment",
  });
}, 2000);

console.log(store.getState());
