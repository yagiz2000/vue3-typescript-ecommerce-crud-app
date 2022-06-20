<template>
  <div class="card" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text">{{ product.price }} $</p>
      <router-link href="#" class="btn btn-primary" :to="`/edit/${product.id}`"
        >Edit</router-link
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from "vue";
import IProduct from "@/types/Product";
defineProps({ product: Object as PropType<IProduct> });
</script>

<style scoped></style>
