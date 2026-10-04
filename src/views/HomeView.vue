<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="flex w-full h-full justify-around">
    <div class="flex flex-col justify-center font-semibold">
      <div class="text-lg mb-2">Hello There,</div>
      <div class="text-5xl mb-5">
        I am Jakub<span class="text-[rgb(251,139,36)]">Hajduk</span>
      </div>
      <div class="flex flex-col items-center gap-5 mb-5">
        <div>Websites and Apps designer</div>
        <div>CNC Machine Operator</div>
        <div>Mechatronics student</div>
        <div>Chess player</div>
      </div>
      <RouterLink
        to="/about"
        aria-label="about me"
        class="p-5 flex items-center text-center text-lg bg-[rgb(251,139,36)] hover:bg-[rgb(228,128,35)] text-white shadow-xl cursor-pointer rounded-2xl self-center"
      >
        Find out more!
      </RouterLink>
    </div>
    <div class="flex items-center">
      <img
        src="../assets/myself.jpg"
        class="w-150 rounded-4xl outline-2 shadow-xl brightness-115"
      />
    </div>
  </div>
</template>
