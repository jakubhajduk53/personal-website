<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "../src/components/Header.vue";
import Aside from "../src/components/Aside.vue";
import Footer from "../src/components/Footer.vue";
</script>

<template>
  <div class="flex">
    <Aside />
    <main class="flex flex-col flex-1">
      <Header />
      <div class="flex-1">
        <RouterView v-slot="{ Component, route }">
          <Suspense :timeout="300">
            <Transition name="fade" mode="out-in">
              <component :is="Component" :key="route.path" />
            </Transition>
            <template #fallback>
              <LoadingSpinner />
            </template>
          </Suspense>
        </RouterView>
      </div>
      <Footer />
    </main>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
