<script setup lang="ts">
import Slider from "../components/Slider.vue";

import type { Slide } from "../types";

const slides: Slide[] = [
  {
    id: 1,
    src: new URL("../assets/aboutPhotos/SantiagoBernabeu.jpg", import.meta.url)
      .href,
    caption: "Santiago Bernabeu, Madrid",
    description: "One more bucket list item checked off",
  },
  {
    id: 2,
    src: new URL("../assets/aboutPhotos/Malaga.jpg", import.meta.url).href,
    caption: "Puente del Carmen, Malaga",
    description: "Endless memories",
  },
  {
    id: 3,
    src: new URL("../assets/aboutPhotos/GibraltarMonkey.jpg", import.meta.url)
      .href,
    caption: "Me with Gibraltar macauqe",
    description: "the only wild monkey species found in Europe",
  },
  {
    id: 4,
    src: new URL("../assets/aboutPhotos/SunsetSide.jpg", import.meta.url).href,
    caption: "Sunset in Mediterranean coast, Side",
    description: "30°C water + burning sand",
  },
  {
    id: 5,
    src: new URL("../assets/aboutPhotos/GibraltarPhone.jpg", import.meta.url)
      .href,
    caption: "Red telephone box, Gibraltar",
    description: "A classic British icon",
  },
  {
    id: 6,
    src: new URL("../assets/aboutPhotos/Alanya.jpg", import.meta.url).href,
    caption: "Alanya from above",
    description: "Stunning views, endless blue",
  },
];
</script>

<template>
  <div class="flex w-full h-full justify-center pl-24">
    <div class="flex flex-col justify-center w-1/2 font-semibold gap-2">
      <div>
        I'm 23 years old part-time student who looks for
        <span class="text-[rgb(251,139,36)]">new opportunities</span>
      </div>
      <div>
        I currently <span class="text-[rgb(251,139,36)]">work</span> in FAKRO,
        creating windows by using advanced machines
      </div>
      <div>
        I'm a programmer by
        <span class="text-[rgb(251,139,36)]">profession</span>, currently
        exploring new fields
      </div>
      <div>
        My <span class="text-[rgb(251,139,36)]">hobby</span> is chess, and I
        play online almost every day
      </div>
      <div>
        My biggest <span class="text-[rgb(251,139,36)]">dream</span> is to
        travel the world
      </div>
    </div>
    <div class="flex items-center w-full">
      <Slider :slides="slides" title="My photo gallery" />
    </div>
  </div>
</template>
