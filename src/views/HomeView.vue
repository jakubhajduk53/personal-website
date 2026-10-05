<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div
    class="flex flex-col lg:flex-row w-full h-full justify-around items-center"
  >
    <div class="contents lg:flex lg:flex-col lg:justify-center font-semibold">
      <div class="order-1 flex flex-col items-center lg:items-stretch">
        <div class="lg:text-lg lg:mb-2">Hello There,</div>
        <div class="text-xl lg:text-5xl mb-2 lg:mb-5">
          I am Jakub<span class="text-highlight">Hajduk</span>
        </div>
        <div class="flex flex-col items-center gap-1 md:gap-2 lg:gap-5 lg:mb-5">
          <div>Websites and Apps designer</div>
          <div>CNC Machine Operator</div>
          <div>Mechatronics student</div>
          <div>Chess player</div>
        </div>
      </div>
      <RouterLink
        to="/about"
        aria-label="about me"
        class="order-3 flex items-center text-center p-2 lg:p-5 lg:text-lg bg-highlight hover:bg-highlight-hover text-white shadow-xl cursor-pointer rounded-2xl self-center"
      >
        Find out more!
      </RouterLink>
    </div>
    <div class="order-2 flex items-center">
      <img
        src="../assets/myself.jpg"
        alt="site owner"
        loading="eager"
        fetchpriority="high"
        class="w-40 md:w-60 lg:w-150 rounded-4xl outline-2 shadow-xl brightness-115"
      />
    </div>
  </div>
</template>
