import React, { useEffect } from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
// store - stores data, think of state
// reducer - function that used to update store
// two arguments - state, action
// state - old state/state before update
// action - what happened / what update
// return updated or old state

import { createStore } from "redux";
// reducer
// function reducer(state, action) {
//   console.log({ state, action });
//   if (action.type === DECREASE) {
//     // mutate
//     // state.count = state.count - 1
//     // immutate
//     return { ...state, count: state.count - 1 };
//   }
//   if (action.type === INCREASE) {
//     return { ...state, count: state.count + 1 };
//   }
//   if (action.type === "RESET") {
//     return { ...state, count: 0 };
//   }
//   //& always need return state
//   // if nothing return, it will return undefined state
//   return state;
// }
//= separate reducer
import reducer from "./reducer";
import { Provider } from "react-redux";
import {
  CLEAR_CART,
  DECREASE,
  GET_AMOUNT,
  GET_TOTAL,
  INCREASE,
} from "./actions";

// store.getState()

// initial store
const initialStore = {
  cart: cartItems,
  total: 123,
  amount: 0,
};
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log("store.getState", store.getState());

// dispatch method - send actions to the store
// actions (objects) - MUST HAVE TYPE PROPERTY - what kind of action
// DONOT MUTATE THE STATE - redux build on IMMUTABILITY (copy)
// copy 5 times
// store.dispatch({ type: DECREASE });
// store.dispatch({ type: DECREASE });
// store.dispatch({ type: DECREASE });
// store.dispatch({ type: DECREASE });
// store.dispatch({ type: DECREASE });
// store.dispatch({ type: INCREASE });
// store.dispatch({ type: CLEAR_CART });
console.log("store.getState", store.getState());
console.log("store.cart", store.getState().amount);

function App() {
  // cart setup
  // useEffect(() => {
  //   store.dispatch({ type: GET_AMOUNT });
  // }, []);

  return (
    <Provider store={store}>
      {/* <Navbar cart={store.getState()} /> */}
      <Navbar />
      {/* <CartContainer cart={cartItems} /> */}
      <CartContainer />
    </Provider>
  );
}

export default App;
