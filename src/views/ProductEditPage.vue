<template>
  <h5>Edit Page</h5>
  <div>
    <form @submit="onSubmitUpdateProduct">
      <div class="row">
        <div class="col-md-6">
          <div class="mb-3">
            <label for="productName" class="form-label">Name</label>
            <input
              v-model="product.name"
              type="text"
              class="form-control"
              id="productName"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="price" class="form-label">Price</label>
            <input
              v-model="product.price"
              type="text"
              class="form-control"
              id="price"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="mb-3">
            <label class="form-label" for="quantity">Quantity</label>

            <input
              v-model="product.quantity"
              type="text"
              class="form-control"
              id="quantity"
            />
          </div>
        </div>
        <div class="col-md-6">
          <label class="form-label" for="category">Category</label>
          <select
            v-model="product.category"
            class="form-select"
            id="category"
            aria-label="Default select example"
          >
            <option
              v-for="category in categoryList"
              :key="category"
              :value="Category[category]"
            >
              {{ Category[category] }}
            </option>
          </select>
        </div>
      </div>

      <button class="btn btn-warning" @click="cancelEditing">Cancel</button>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import useProducts from "@/composables/Product";
import IProduct from "@/types/Product";
import { useRoute, useRouter } from "vue-router";
import Category from "@/enums/Category";

const { getProductById, updateProduct } = useProducts();
const $route = useRoute();
const $router = useRouter();

const categoryList = ref<string[]>(Object.keys(Category));

const product = ref<IProduct>({});
const getProductInfo = (): void => {
  const { productId } = $route.params;
  product.value = getProductById(parseInt(productId));
};
getProductInfo();

const onSubmitUpdateProduct = (): void => {
  updateProduct(product.value);
  $router.push("/");
};

const cancelEditing = (): void => {
  $router.push("/");
};
</script>

<style scoped></style>
