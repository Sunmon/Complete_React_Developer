import { createSelector } from 'reselect';

// input selector
const selectCart = state => state.cart;

// createSelector(collection of input selector, return value func)
// make selectCartItems to memorize
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems,
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden,
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0,
    ),
);

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.price,
    0,
  ),
);
