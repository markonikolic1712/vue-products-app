<template>
  <nav>
    <router-link to="/products">Products</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<script setup>
import { ref, computed, onMounted, reactive, watch } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';

const store = useStore();

const router = useRouter();
const route = useRoute();

watch(route, (routeValue) => {
  console.log('routeValue.path: ', routeValue.path);
  console.log('routeValue.params: ', routeValue.params);
  console.log('routeValue: ', routeValue);
  if (routeValue.path === '/products' || routeValue.path === '/products/')
    store.dispatch('setProductList');
  if (routeValue.path === '/') router.push(`/products`);
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

/* html {
  overflow-y: auto !important;
} */
</style>
