import StorageService from '../services/StorageService';

const save = (cart) => {
  StorageService('cart').set(cart);
}

const clear = () => {
  StorageService('cart').remove();
}

export default {
  save, clear
}
