<template>
  <div class="row">
    <div class="col-md-4" v-for="product in products" :key="product.id">
      <ProductCard :product="product" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductCard from "@/components/ProductCard.vue";
import useProducts from "@/composables/Product";
import IProduct from "@/types/Product";
const { products } = useProducts();
console.log(products);
</script>

<style scoped></style>
