import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user-reducer';
import cartReducer from './cart/cart.reducer';

const persistConfig = {
  key: 'root', // store from the root
  storage,
  whitelist: ['cart'], // to do persist
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

// root reducer를 persist reducer로 변환하여 export
export default persistReducer(persistConfig, rootReducer);
