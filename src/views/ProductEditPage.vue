<template>
  <h5>Edit Page</h5>
  <div>
    <form @submit="onSubmitUpdateProduct">
      <div class="mb-3">
        <label for="productName" class="form-label">Name</label>
        <input
          v-model="product.name"
          type="text"
          class="form-control"
          id="productName"
        />
      </div>
      <div class="mb-3">
        <label for="price" class="form-label">Price</label>
        <input
          v-model="product.price"
          type="text"
          class="form-control"
          id="price"
        />
      </div>
      <div class="mb-3">
        <label class="form-check-label" for="quantity">Quantity</label>

        <input
          v-model="product.quantity"
          type="text"
          class="form-control"
          id="quantity"
        />
      </div>
      <button class="btn btn-danger" @click="cancelEditing">Cancel</button>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import useProducts from "@/composables/Product";
import IProduct from "@/types/Product";
import { useRoute, useRouter } from "vue-router";

const { getProductById, updateProduct } = useProducts();
const $route = useRoute();
const $router = useRouter();
const product = ref<IProduct>({});

const { productId } = $route.params;
product.value = getProductById(parseInt(productId));

const onSubmitUpdateProduct = (): void => {
  updateProduct(product.value);
  $router.push("/");
};

const cancelEditing = (): void => {
  $router.push("/");
};
</script>

<style scoped></style>
