<template>
  <div class="row" v-if="products.length > 0">
    <div class="col-md-4" v-for="product in products" :key="product.id">
      <ProductCard :product="product" />
    </div>
  </div>
  <div v-else class="row">
    <div class="col-md-12">
      <h1>Please Add Product</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductCard from "@/components/ProductCard.vue";
import useProducts from "@/composables/Product";
const { products } = useProducts();
</script>

<style scoped></style>
