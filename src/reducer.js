import { DECREASE, INCREASE } from "./actions";

function reducer(state, action) {
  console.log({ state, action });
  if (action.type === DECREASE) {
    // mutate
    // state.count = state.count - 1
    // immutate
    return { ...state, count: state.count - 1 };
  }
  if (action.type === INCREASE) {
    return { ...state, count: state.count + 1 };
  }
  if (action.type === "RESET") {
    return { ...state, count: 0 };
  }
  //& always need return state
  // if nothing return, it will return undefined state
  return state;
}

export default reducer;
