import initialState from './store';
import { LOGIN_SUCCESS, LOGOUT, LOGIN_FAIL, ADD_CUISINS, ADD_STORES, ADD_PRODUCTS, ADD_TO_CART, UPDATE_CART_PRODUCT, REMOVE_PRODUCT_FROM_CART, CLEAR_CART, ADD_ORDERS } from './actions';
import {
  loginSuccessMutator,
  logoutMutator,
  loginFailMutator,
  addCuisinsMutator,
  addStoresMutator,
  addProductsMutator,
  addToCartMutator,
  updateCartProductMutator,
  removeProductFromCartMutator,
  clearCartMutator,
  addOrdersMutator
} from './mutators';

const reducer = ( state = initialState, action ) => {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return loginSuccessMutator(state, action);
    case LOGIN_FAIL:
      return loginFailMutator(state, action);
    case LOGOUT:
      return logoutMutator(state, action);
    case ADD_CUISINS:
      return addCuisinsMutator(state, action);
    case ADD_STORES:
      return addStoresMutator(state, action);
    case ADD_PRODUCTS:
      return addProductsMutator(state, action);
    case ADD_TO_CART:
      return addToCartMutator(state, action);
    case UPDATE_CART_PRODUCT:
      return updateCartProductMutator(state, action);
    case REMOVE_PRODUCT_FROM_CART:
      return removeProductFromCartMutator(state, action);
    case CLEAR_CART:
      return clearCartMutator(state, action);
    case ADD_ORDERS:
      return addOrdersMutator(state, action);
    default:
      return state;
  }
}

export default reducer;
