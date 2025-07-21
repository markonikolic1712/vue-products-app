<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <div class="text-h4">{{ product.title }}</div>
        <v-text-field
          v-model="product.id"
          label="Id"
          variant="outlined"
          readonly
        ></v-text-field>
        <v-textarea
          v-model="product.description"
          label="Description"
          variant="outlined"
          readonly
          rows="1"
          auto-grow
        ></v-textarea>
        <v-text-field
          v-model="product.category"
          label="Category"
          variant="outlined"
          readonly
        ></v-text-field>
        <v-text-field
          v-model="product.price"
          label="Price"
          variant="outlined"
          readonly
        ></v-text-field>
        <v-text-field
          v-model="product.discountPercentage"
          label="Discount"
          variant="outlined"
          readonly
        ></v-text-field>
        <v-text-field
          v-model="product.rating"
          label="Rating"
          variant="outlined"
          readonly
        ></v-text-field>
        <v-text-field
          v-model="product.availabilityStatus"
          label="Availability status"
          variant="outlined"
          readonly
        ></v-text-field>
        <v-text-field
          v-model="product.stock"
          label="Stock"
          variant="outlined"
          readonly
        ></v-text-field>
        <v-text-field
          v-model="product.weight"
          label="Weight"
          variant="outlined"
          readonly
        ></v-text-field>
        <v-text-field
          v-model="product.dimensions"
          label="Dimensions"
          variant="outlined"
          readonly
        ></v-text-field>
        <v-text-field
          v-model="product.warrantyInformation"
          label="Warranty information"
          variant="outlined"
          readonly
        ></v-text-field>
        <v-text-field
          v-model="product.shippingInformation"
          label="Shipping information"
          variant="outlined"
          readonly
        ></v-text-field>
        <v-text-field
          v-model="product.returnPolicy"
          label="Return policy"
          variant="outlined"
          readonly
        ></v-text-field>
        <v-text-field
          v-model="product.createdAt"
          label="Created at"
          variant="outlined"
          readonly
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-row>
          <v-img width="300" :src="product.thumbnail">
            <template v-slot:placeholder>
              <div class="d-flex align-center justify-center fill-height">
                <v-progress-circular
                  color="grey-lighten-4"
                  indeterminate
                ></v-progress-circular>
              </div>
            </template>
          </v-img>
        </v-row>
        <v-row justify="space-around">
          <v-col cols="4">
            <v-img width="100" :src="product.qrCode">
              <template v-slot:placeholder>
                <div class="d-flex align-center justify-center fill-height">
                  <v-progress-circular
                    color="grey-lighten-4"
                    indeterminate
                  ></v-progress-circular>
                </div>
              </template>
            </v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    {{ product }}
  </v-container>
</template>

<script setup>
import { ref, computed, onMounted, reactive, watch } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const store = useStore();

const currentProduct = reactive(store.getters.currentProduct);
const product = computed(() => {
  console.log(
    'ProductDetails.vue => computed() => currentProduct: ',
    currentProduct
  );
  console.log(
    'ProductDetails.vue => computed() => store.getters.currentProduct: ',
    store.getters.currentProduct
  );
  return {
    id: currentProduct.id,
    title: currentProduct.title,
    description: currentProduct.description,
    category: currentProduct.category,
    price: currentProduct.price,
    discountPercentage: currentProduct.discountPercentage + '%',
    rating: currentProduct.rating,
    availabilityStatus: currentProduct.availabilityStatus,
    stock: currentProduct.stock,
    weight: currentProduct.weight,
    dimensions:
      'Width: ' +
      currentProduct.dimensions.width +
      '; Height: ' +
      currentProduct.dimensions.height +
      '; Depth: ' +
      currentProduct.dimensions.depth,
    warrantyInformation: currentProduct.warrantyInformation,
    shippingInformation: currentProduct.shippingInformation,
    returnPolicy: currentProduct.returnPolicy,
    createdAt:
      new Date(currentProduct.meta.createdAt)
        .toLocaleString('fr-CH')
        .split(' ')[0] +
      ' ' +
      new Date(currentProduct.meta.createdAt)
        .toLocaleString('fr-CH')
        .split(' ')[1],
    thumbnail: currentProduct.thumbnail,
    qrCode: currentProduct.meta.qrCode,
  };
});

watch(route, (routeValue) => {
  console.log('routeValue: ', routeValue.path);
  console.log('routeValue: ', routeValue.params);
});

onMounted(() => {
  console.log(
    'ProductDetails.vue => onMounted: ',
    store.getters.currentProduct
  );
});
</script>
