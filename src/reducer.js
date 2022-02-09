import { CLEAR_CART, DECREASE, INCREASE } from "./actions";

//= method 1: using if statement
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

//= method 2: using switch statement
function reducer(state, { type, payload }) {
  switch (type) {
    case CLEAR_CART:
      return { ...state, cart: [], total: 0, amount: 0 };
    default:
      return { ...state };
  }
}

export default reducer;
