import { createStore } from 'vuex';
import { getAllProducts, getProductById } from '@/api/service.js';
import { reactive } from 'vue';

export default createStore({
  state: {
    productList: [],
    currentProduct: reactive({}),
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

    async setCurrentProduct(ctx, id) {
      const data = await getProductById(id);
      ctx.commit('setCurrentProduct', data);
      return data;
    },
  },
  modules: {},
});
