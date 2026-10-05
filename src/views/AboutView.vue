<script setup lang="ts">
import Slider from "../components/Slider.vue";
import { aboutSlides } from "../data/";
</script>

<template>
  <div class="flex flex-col xl:flex-row w-full h-full justify-around">
    <div class="contents xl:flex xl:flex-col xl:justify-center">
      <div
        class="order-1 flex flex-col items-center xl:items-start xl:w-150 text-sm xl:text-base justify-center font-semibold p-2 lg:p-0 gap-1 xl:gap-5"
      >
        <div>
          I'm 23 years old part-time student who looks for
          <span class="text-highlight">new opportunities</span>
        </div>
        <div>
          I currently <span class="text-highlight">work</span> in FAKRO,
          creating windows by using advanced machines
        </div>
        <div>
          I'm a programmer by
          <span class="text-highlight">profession</span>, currently exploring
          new fields
        </div>
        <div>
          My <span class="text-highlight">hobby</span> is chess, and I play
          online almost every day
        </div>
        <div>
          My biggest <span class="text-highlight">dream</span> is to travel the
          world
        </div>
      </div>
    </div>
    <div class="flex items-center">
      <Slider :slides="aboutSlides" title="My photo gallery" />
    </div>
  </div>
</template>
