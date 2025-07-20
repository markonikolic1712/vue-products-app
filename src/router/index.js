import { createRouter, createWebHistory } from 'vue-router';
import ProductsView from '../components/ProductsView.vue';
import ProductDetails from '../components/ProductDetails.vue';

const routes = [
  {
    path: '/products',
    name: 'products',
    component: ProductsView,
  },
  {
    path: '/products/:id',
    name: 'ProductDetails',
    component: ProductDetails,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../components/AboutView.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'ProductsView',
    component: ProductsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
