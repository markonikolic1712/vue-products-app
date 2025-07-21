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
    <v-dialog v-model="showDialog" min-height="500px" max-width="50%">
      <v-card class="overflow-hidden">
        <v-card-title class="ml-2">Product</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="currentProductId"
            label="Id"
            variant="outlined"
            readonly
          ></v-text-field>
          <v-text-field
            v-model="currentProductTite"
            label="Title"
            variant="outlined"
            readonly
          ></v-text-field>
          <v-text-field
            v-model="currentProductCatgory"
            label="Category"
            variant="outlined"
            readonly
          ></v-text-field>
          <v-text-field
            v-model="currentProductPrice"
            label="Price"
            variant="outlined"
            readonly
          ></v-text-field>
          <v-text-field
            v-model="currentProductAvailability"
            label="Avilability"
            variant="outlined"
            readonly
          ></v-text-field>
          <v-row justify="end" class="pr-3 pt-2">
            <v-btn color="error" class="ml-6" @click="showDialog = false"
              >Close</v-btn
            >
            <v-btn
              color="info"
              class="ml-6"
              @click="getAllDeatailsForProduct(currentProductId)"
              >View all details</v-btn
            >
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-overlay :model-value="overlay" class="align-center justify-center">
      <v-progress-circular
        color="primary"
        size="64"
        indeterminate
      ></v-progress-circular>
    </v-overlay>
  </v-container>
</template>

<script setup>
import { ref, computed, onMounted, reactive, watch, onUpdated } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';

const store = useStore();
const router = useRouter();

const products = computed(() => store.getters.productList);
const showDialog = ref(false);
const overlay = ref(false);

const currentProductId = ref('');
const currentProductTite = ref('');
const currentProductCatgory = ref('');
const currentProductPrice = ref('');
const currentProductAvailability = ref('');

const viewDetails = (product) => {
  currentProductId.value = product.id;
  currentProductTite.value = product.title;
  currentProductCatgory.value = product.category;
  currentProductPrice.value = product.price;
  currentProductAvailability.value = product.availability;

  showDialog.value = true;
};

const getAllDeatailsForProduct = async (id) => {
  overlay.value = true;
  const product = await store.dispatch('setCurrentProduct', id);
  if (product) {
    showDialog.value = false;
    router.push(`/products/${id}`);
    //loader.value = false;
  }
};

watch(overlay, (val) => {
  if (val) {
    setTimeout(() => {
      overlay.value = false;
    }, 3000);
  }
});

onMounted(() => {
  //store.dispatch('setProductList');
});
</script>

<style scoped></style>
