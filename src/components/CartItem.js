import React from "react";
import { connect } from "react-redux";
import { CHANGE_AMOUNT, DECREASE, INCREASE, REMOVE } from "../actions";

const CartItem = ({
  id,
  img,
  title,
  price,
  amount /*, dispatch*/,
  remove,
  increase,
  decrease,
  changeAmount,
}) => {
  return (
    <div className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        {/* remove button */}
        <button
          className='remove-btn'
          // onClick={() => dispatch({ type: REMOVE, payload: { id } })}
          onClick={() => remove()}
        >
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button
          className='amount-btn amount-btn__inc'
          // onClick={() => increase()}
          onClick={() => changeAmount("inc")}
        >
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
          </svg>
        </button>
        {/* amount */}
        <p className='amount'>{amount}</p>
        {/* decrease amount */}
        <button
          className='amount-btn amount-btn__dec'
          // onClick={() => decrease()}
          onClick={() => {
            // amount === 1 ? remove() : decrease();
            amount === 1 ? remove() : changeAmount("dec");
          }}
        >
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
          </svg>
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (store) => {
  const { cart } = store;
  return {
    cart,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  // console.log(ownProps);
  // result: all props pass in <CartItem key={item.id} {...item} />
  // like id, img, title, price, amount
  const { id, amount } = ownProps;
  return {
    remove: () => dispatch({ type: REMOVE, payload: { id } }),
    increase: () => dispatch({ type: INCREASE, payload: { id } }),
    decrease: () => dispatch({ type: DECREASE, payload: { id, amount } }),
    changeAmount: (value) =>
      dispatch({ type: CHANGE_AMOUNT, payload: { id, value } }),
  };
};
// export default connect(mapStateToProps)(CartItem);
export default connect(
  null /** bypass mapStateToProps function */,
  mapDispatchToProps
)(CartItem);
// export default connect(
//   mapStateToProps /** bypass mapStateToProps function */,
//   mapDispatchToProps
// )(CartItem);
