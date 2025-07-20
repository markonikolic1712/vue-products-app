<template>
  <v-container>
    <v-table theme="dark">
      <thead>
        <tr>
          <th class="text-center">Id</th>
          <th class="text-center">Title</th>
          <th class="text-center">Category</th>
          <th class="text-center">Price</th>
          <th class="text-center">Availability</th>
          <th class="text-center"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p in products" :key="p.id">
          <td>{{ p.id }}</td>
          <td>{{ p.title }}</td>
          <td>{{ p.category }}</td>
          <td>{{ p.price }}</td>
          <td>{{ p.availability }}</td>
          <td>
            <v-btn color="#3b3b3b" @click="viewDetails(p)">Details</v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const products = computed(() => {
  console.log('ProductsView => computed');
  return store.getters.productList;
});

const viewDetails = (product) => {
  console.log('product:', product);
};

onMounted(() => {
  console.log('ProductsView => onMounted');
  store.dispatch('setProductList');
});
</script>
