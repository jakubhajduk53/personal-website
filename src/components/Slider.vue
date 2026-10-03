<script setup lang="ts">
import { ref, computed } from "vue";
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

const current = ref<number>(0);

const active = computed<Slide>(() => slides[current.value]);

function next(): void {
  current.value = (current.value + 1) % slides.length;
}

function prev(): void {
  current.value = (current.value - 1 + slides.length) % slides.length;
}
</script>

<template>
  <div class="flex flex-col items-center w-full gap-4">
    <div class="flex flex-col items-center w-150">
      <p class="font-semibold text-2xl text-[rgb(251,139,36)]">
        My photo gallery
      </p>
    </div>
    <div class="flex items-center justify-center w-full">
      <button
        type="button"
        class="size-12 rounded-xl bg-[rgb(15,76,92)] hover:bg-[rgb(8,65,75)] text-white shadow-lg text-xl cursor-pointer"
        aria-label="Previous photo"
        @click="prev"
      >
        &lt;
      </button>
      <div class="flex items-center justify-center w-150 aspect-4/3">
        <img
          :key="active.id"
          :src="active.src"
          :alt="active.caption"
          class="max-w-full max-h-full object-contain rounded-4xl outline-2 shadow-xl brightness-115"
        />
      </div>
      <button
        type="button"
        class="size-12 rounded-xl bg-[rgb(15,76,92)] hover:bg-[rgb(8,65,75)] text-white shadow-lg text-xl cursor-pointer"
        aria-label="Next photo"
        @click="next"
      >
        &gt;
      </button>
    </div>
    <div class="flex flex-col items-center gap-1 w-150">
      <p class="text-lg text-center">{{ active.caption }}</p>
      <p class="text-center text-sm">{{ active.description }}</p>
      <span class="text-sm text-gray-500"
        >{{ current + 1 }} / {{ slides.length }}</span
      >
    </div>
  </div>
</template>
