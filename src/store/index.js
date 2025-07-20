import { createStore } from 'vuex';
import { getAllProducts, getProductById } from '@/api/service.js';

export default createStore({
  state: {
    productList: [],
    currentProduct: {},
  },
  getters: {
    productList: (state) => state.productList,
    currentProduct: (state) => state.currentProduct,
  },
  mutations: {
    setProductList(state, payload) {
      state.productList = payload;
    },
    setCurrentProduct(state, payload) {
      state.currentProduct = payload;
    },
  },
  actions: {
    async setProductList(ctx) {
      const data = await getAllProducts();
      ctx.commit('setProductList', data);
    },

    async setCurrentProduct(ctx) {
      const data = await getProductById();
      console.log('data: ', data);
      ctx.setCurrentProduct(data);
    },
  },
  modules: {},
});
