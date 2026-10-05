<script setup lang="ts">
import Slider from "../components/Slider.vue";
import { projectsSlides } from "../data/";
</script>

<template>
  <div class="flex flex-col lg:flex-row w-full h-full justify-around">
    <div class="contents lg:flex lg:flex-col lg:justify-center">
      <div
        class="order-1 flex flex-col items-center lg:items-start lg:w-150 text-sm lg:text-base justify-center font-semibold p-2 lg:p-0 gap-1 lg:gap-5"
      >
        <div>
          My websites are built with the
          <span class="text-highlight">Vue.js</span> framework
        </div>
        <div>I follow modern software development best practices</div>
        <div>I write clean, maintainable, and scalable code</div>
      </div>
    </div>
    <div class="flex items-center">
      <Slider :slides="projectsSlides" title="My projects" />
    </div>
  </div>
</template>
