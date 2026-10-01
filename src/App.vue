<script setup lang="ts">
import Header from "../src/components/Header.vue";
import Aside from "../src/components/Aside.vue";
import Footer from "../src/components/Footer.vue";
</script>

<template>
  <div class="flex">
    <Aside />
    <main class="flex flex-col flex-1">
      <Header />
      <div class="flex-1"></div>
      <Footer />
    </main>
  </div>
</template>
