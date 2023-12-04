import {createModel} from '@rematch/core';
import * as apiService from '../services/productService';

export const product = createModel()({
  state: {
    productDetail: null,
    productList: [],
    favouriteProducts: [],
  },
  reducers: {
    setProductList(state, productList) {
      return {...state, productList: productList};
    },
    setProductDetail(state, productDetail) {
      return {...state, productDetail: productDetail};
    },
    setFavouriteProducts(state, favouriteProducts) {
      return {
        ...state,
        favouriteProducts: [...state.favouriteProducts, favouriteProducts],
      };
    },
    setRemoveFavouriteProducts(state, favouriteProducts) {
      return {
        ...state,
        favouriteProducts: state.favouriteProducts.filter(
          item => item.id !== favouriteProducts.id,
        ),
      };
    },
  },

  effects: dispatch => ({
    getProductsList: async () => {
      try {
        const list = await apiService.getProductsList();
        if (list?.products?.length) {
          dispatch.product.setProductList(list.products);
        }
      } catch (e) {
        dispatch.alerts.error({
          domain: 'getProductsList',
          message: e.response.message,
        });
      }
    },
    getProductById: async id => {
      try {
        const detail = await apiService.getProductById(id);
        if (detail?.id) {
          dispatch.product.setProductDetail(detail);
        }
      } catch (e) {
        dispatch.alerts.error({
          domain: 'getProductById',
          message: e.response.message,
        });
      }
    },
  }),
});
