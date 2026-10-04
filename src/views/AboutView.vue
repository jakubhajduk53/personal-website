<script setup lang="ts">
import Slider from "../components/Slider.vue";

import type { Slide } from "../types";

const slides: Slide[] = [
  {
    id: 1,
    src: new URL("../assets/aboutPhotos/santiago-bernabeu.jpg", import.meta.url)
      .href,
    caption: "Santiago Bernabeu, Madrid",
    description: "One more bucket list item checked off",
  },
  {
    id: 2,
    src: new URL("../assets/aboutPhotos/malaga.jpg", import.meta.url).href,
    caption: "Puente del Carmen, Malaga",
    description: "Endless memories",
  },
  {
    id: 3,
    src: new URL("../assets/aboutPhotos/gibraltar-monkey.jpg", import.meta.url)
      .href,
    caption: "Me with Gibraltar macauqe",
    description: "the only wild monkey species found in Europe",
  },
  {
    id: 4,
    src: new URL("../assets/aboutPhotos/sunset-side.jpg", import.meta.url).href,
    caption: "Sunset in Mediterranean coast, Side",
    description: "30°C water + burning sand",
  },
  {
    id: 5,
    src: new URL("../assets/aboutPhotos/gibraltar-phone.jpg", import.meta.url)
      .href,
    caption: "Red telephone box, Gibraltar",
    description: "A classic British icon",
  },
  {
    id: 6,
    src: new URL("../assets/aboutPhotos/alanya.jpg", import.meta.url).href,
    caption: "Alanya from above",
    description: "Stunning views, endless blue",
  },
];
</script>

<template>
  <div class="flex w-full h-full justify-around">
    <div class="flex flex-col w-150 justify-center font-semibold gap-5">
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
    <div class="flex items-center">
      <Slider :slides="slides" title="My photo gallery" />
    </div>
  </div>
</template>
