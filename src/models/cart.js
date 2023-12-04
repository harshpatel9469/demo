import {createModel} from '@rematch/core';

export const cart = createModel()({
  state: {
    cart: [],
  },
  reducers: {
    setCart(state, cart) {
      return {...state, cart: [...state.cart, {...cart, quantity: 1}]};
    },
    increaseQtyToItem(state, item) {
      let arr = state.cart;
      let index = arr.findIndex(cartItem => cartItem.id === item.id);
      arr[index].quantity = arr[index].quantity + 1;
      return {...state, cart: [...arr]};
    },
    decreaseQtyToItem(state, item) {
      let arr = state.cart;
      let index = arr.findIndex(cartItem => cartItem.id === item.id);
      if (arr[index].quantity == 1) {
        arr.splice(index, 1);
      } else arr[index].quantity = arr[index].quantity - 1;
      return {...state, cart: [...arr]};
    },
  },

  effects: dispatch => ({
    addtoCart: async item => {
      try {
        dispatch.cart.setCart(item);
      } catch (e) {
        dispatch.alerts.error({
          domain: 'addtoCart',
          message: e.response.message,
        });
      }
    },
  }),
});
