import AuthController from "../controllers/AuthController";
import CartService from "../services/CartService";

export const loginSuccessMutator = (state, action) => {
  return ({
    ...state,
    user: {...action.user}
  });
}
export const loginFailMutator = (state, action) => {
  return ({
    ...state,
    user: null
  });
}
export const logoutMutator = (state, action) => {
  AuthController.logout();

  return ({
    ...state,
    user: null
  });
};
export const addCuisinsMutator = (state, action) => ({
  ...state,
  cuisins: [...action.value]
});
export const addStoresMutator = (state, action) => {
  let stores = [...state.stores];

  action.value.forEach(store => {
    if (state.stores.filter($store => $store.id === store.id).length === 0) {
      stores = [...stores, store];
    }
  });

  return ({
    ...state,
    stores: stores
  })
};
export const addProductsMutator = (state, action) => {
  let products = [...state.products];

  action.value.forEach(product => {
    if (state.products.filter($product => $product.id === product.id).length === 0) {
      products.push(product);
    }
  });

  return ({ ...state, products });
};
export const addToCartMutator = (state, action) => {
  const product = action.value;
  let inCart = false;
  const cart = state.cart.map($product => {
    if($product.id === product.id) {
      inCart = true;
      $product = {...$product, count: +product.count + +$product.count};
    }

    return $product;
  });

  if (!inCart) {
    cart.push(product);
  }

  const newCart = ({ ...state, cart });
  CartService.save(newCart);

  return newCart;
};
export const updateCartProductMutator = (state, action) => {
  const product = action.value;
  const cart = state.cart.map($product => {
    if($product.id === product.id) {
      $product = {...$product, count: product.count};
    }

    return $product;
  });

  const newCart = ({ ...state, cart });
  CartService.save(newCart);

  return newCart;
};
export const removeProductFromCartMutator = (state, action) => {
  const product = action.value;
  const cart = state.cart.filter($product => $product.id !== product.id);

  const newCart = ({ ...state, cart });
  CartService.save(newCart);

  return newCart;
};