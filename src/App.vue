<template>
  <NavBar />
  <div class="app text-center">
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import NavBar from "@/components/NavBar.vue";
</script>

<style scoped></style>
