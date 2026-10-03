<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="flex w-full h-full justify-center pl-24">
    <div class="flex flex-col justify-center w-1/2 font-semibold">
      <div class="text-lg">Hello There,</div>
      <div class="text-5xl mb-2">
        I am Jakub<span class="text-[rgb(251,139,36)]">Hajduk</span>
      </div>
      <div class="flex flex-col gap-1">
        <div>Websites and Apps designer</div>
        <div>CNC Machine Operator</div>
        <div>Mechatronics student</div>
        <div>Chess player</div>
      </div>
      <RouterLink
        to="/about"
        aria-label="about me"
        class="w-36 h-24 mt-5 flex items-center text-center text-lg bg-[rgb(251,139,36)] text-white shadow-xl cursor-pointer rounded-2xl"
      >
        Find out more about me!
      </RouterLink>
    </div>
    <div class="flex items-center w-full">
      <img
        src="../assets/myself.jpg"
        class="w-150 rounded-4xl outline-2 shadow-xl brightness-115"
      />
    </div>
  </div>
</template>
