import {
  CHANGE_AMOUNT,
  CLEAR_CART,
  DECREASE,
  GET_AMOUNT,
  GET_TOTALS,
  INCREASE,
  REMOVE,
} from "./actions";
import cartItems from "./cart-items";
import { checkNumber } from "./helper";

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

const initialStore = {
  cart: cartItems,
  total: 123,
  amount: 0,
};

//= method 2: using switch statement
function reducer(state = initialStore, { type, payload }) {
  switch (type) {
    case CLEAR_CART:
      return { ...state, cart: [], total: 0, amount: 0 };
    //= decrease ver1
    // case DECREASE: {
    //   console.log("decrease reducer", payload.id);
    //   let tempCart = [];
    //   if (payload.amount === 1) {
    //     tempCart = state.cart.filter((cartItem) => cartItem.id !== payload.id);
    //   } else {
    //     tempCart = state.cart.map((cartItem) => {
    //       if (cartItem.id === payload.id) {
    //         let newAmount = checkNumber({
    //           value: cartItem.amount - 1,
    //           min: 0,
    //         });
    //         return { ...cartItem, amount: newAmount };
    //       }
    //       return cartItem;
    //     });
    //   }
    //   return { ...state, cart: tempCart };
    // }
    //= decrease ver2
    case DECREASE: {
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === payload.id) {
          let newAmount = checkNumber({
            value: cartItem.amount - 1,
            min: 0,
          });
          return { ...cartItem, amount: newAmount };
        }
        return cartItem;
      });
      return { ...state, cart: tempCart };
    }
    case INCREASE: {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === payload.id) {
          let newAmount = checkNumber({
            value: cartItem.amount + 1,
            min: 0,
          });
          if (newAmount === 0) {
          }
          return { ...cartItem, amount: newAmount };
        }
        return cartItem;
      });
      return { ...state, cart: tempCart };
    }
    case CHANGE_AMOUNT: {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === payload.id) {
          let newAmount = cartItem.amount;
          if (payload.value === "inc") {
            newAmount = checkNumber({
              value: cartItem.amount + 1,
              min: 0,
            });
          } else if (payload.value === "dec") {
            newAmount = checkNumber({
              value: cartItem.amount - 1,
              min: 0,
            });
          }
          return { ...cartItem, amount: newAmount };
        }
        return cartItem;
      });
      return { ...state, cart: tempCart };
    }

    case REMOVE: {
      console.log("remove reducer");
      const tempCart = state.cart.filter((item) => item.id !== payload.id);
      return { ...state, cart: tempCart };
    }
    case GET_TOTALS: {
      //= method 1: calculate only total
      // const cartTotals = state.cart.reduce((total, item) => {
      //   return total + item.amount;
      // }, 0);
      //= method 2: calculate both total & amount
      let { total, amount } = state.cart.reduce(
        (cartTotal, item) => {
          const { amount, price } = item;
          cartTotal.amount += amount;
          cartTotal.total += price * amount;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      return { ...state, total, amount };
    }
    case GET_AMOUNT: {
      const cartAmount = state.cart.reduce((total, item) => {
        return total + item.amount;
      }, 0);
      return { ...state, amount: cartAmount };
    }
    default:
      return { ...state };
  }
}

export default reducer;
