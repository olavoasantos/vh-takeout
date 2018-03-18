import StorageService from "../services/StorageService";

const store = {
  user: StorageService('user').get(),
  redirectToReferrer: false,
  orders: [],
  stores: [],
  products: [],
  cart: StorageService('cart').get() || [],
};

export default store;