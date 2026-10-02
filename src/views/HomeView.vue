<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="flex w-full h-full justify-center pl-24">
    <div class="flex flex-col justify-center w-1/2">
      <div class="font-semibold text-lg">Hello There,</div>
      <div class="font-semibold text-5xl mb-2">
        I am Jakub<span class="text-[rgb(251,139,36)]">Hajduk</span>
      </div>
      <div class="flex flex-col gap-1">
        <div class="font-semibold">Websites and Apps designer</div>
        <div class="font-semibold">CNC Machine Operator</div>
        <div class="font-semibold">Mechatronics student</div>
        <div class="font-semibold">Chess player</div>
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
        src="../assets/myself.png"
        class="w-150 rounded-4xl outline-2 shadow-xl brightness-115"
      />
    </div>
  </div>
</template>
