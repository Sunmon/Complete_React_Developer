import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
  //paload: 필요없음
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});